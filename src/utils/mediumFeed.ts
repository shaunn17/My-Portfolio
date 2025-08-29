export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  contentSnippet: string;
  content: string;
  guid: string;
  categories: string[];
  thumbnail?: string;
}

export interface MediumFeedData {
  posts: MediumPost[];
  loading: boolean;
  error: string | null;
}

// Helper function to extract image from Medium post content
const extractImageFromContent = (content: string): string | undefined => {
  if (!content) return undefined;
  
  // First try to find Medium's CDN images directly
  const mediumImageRegex = /https:\/\/cdn-images-1\.medium\.com\/[^"\s<>]+/i;
  const mediumMatch = content.match(mediumImageRegex);
  if (mediumMatch) {
    return mediumMatch[0];
  }
  
  // Then try standard img tag patterns
  const imgRegex = /<img[^>]+src=["']([^"'>]+)["'][^>]*>/i;
  const imgMatch = content.match(imgRegex);
  if (imgMatch && imgMatch[1]) {
    let imageUrl = imgMatch[1].replace(/&amp;/g, '&');
    if (imageUrl.includes('medium.com') || imageUrl.match(/\.(jpg|jpeg|png|gif|webp)(\?|$)/i)) {
      return imageUrl;
    }
  }
  
  return undefined;
};

// Helper function to clean HTML content and create excerpt
const createExcerpt = (content: string, maxLength: number = 150): string => {
  // Remove HTML tags
  const textContent = content.replace(/<[^>]*>/g, '');
  // Decode HTML entities
  const decoded = textContent
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  
  // Truncate to maxLength
  if (decoded.length <= maxLength) return decoded;
  return decoded.substring(0, maxLength).trim() + '...';
};

// Helper function to format date
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
};

// Helper function to get a fallback image based on content
const getFallbackImage = (title: string, content: string): string => {
  const fallbackImages = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80', // Data visualization
    'https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80', // Code/programming
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80', // Analytics/dashboard
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80', // Data science
    'https://images.unsplash.com/photo-1509098681029-6832da980900?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80'  // Technology
  ];
  
  // Choose image based on content keywords
  const text = (title + ' ' + content).toLowerCase();
  
  if (text.includes('data') || text.includes('analytics')) {
    return fallbackImages[0];
  } else if (text.includes('code') || text.includes('programming') || text.includes('development')) {
    return fallbackImages[1];
  } else if (text.includes('dashboard') || text.includes('visualization') || text.includes('chart')) {
    return fallbackImages[2];
  } else if (text.includes('science') || text.includes('machine learning') || text.includes('ai')) {
    return fallbackImages[3];
  } else {
    return fallbackImages[4];
  }
};

export const fetchMediumPosts = async (username: string, limit: number = 3): Promise<MediumPost[]> => {
  // Direct RSS feed URL for figueiroshaun
  const rssUrl = `https://medium.com/feed/@${username}`;
  
  const attempts = [
    {
      name: 'rss2json',
      url: `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=${limit}`
    },
    {
      name: 'allorigins',
      url: `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`
    }
  ];

  for (const attempt of attempts) {
    try {
      console.log(`Trying to fetch Medium posts using ${attempt.name}...`);
      
      const response = await fetch(attempt.url);
      
      if (!response.ok) {
        console.warn(`${attempt.name} failed with status: ${response.status}`);
        continue;
      }
      
      const data = await response.json();
      
      // Handle different proxy response formats
      let items: any[] = [];
      
      if (attempt.name === 'rss2json') {
        if (data.status !== 'ok') {
          console.warn(`${attempt.name} error: ${data.message || 'Unknown error'}`);
          continue;
        }
        items = data.items || [];
      } else if (attempt.name === 'allorigins') {
        // allorigins returns the raw RSS, need to parse XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        const rssItems = xmlDoc.querySelectorAll('item');
        
        items = Array.from(rssItems).map(item => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
          pubDate: item.querySelector('pubDate')?.textContent || '',
          author: item.querySelector('dc\\:creator')?.textContent || username,
          description: item.querySelector('description')?.textContent || '',
          content: item.querySelector('content\\:encoded')?.textContent || '',
          guid: item.querySelector('guid')?.textContent || '',
          categories: Array.from(item.querySelectorAll('category')).map(cat => cat.textContent || '')
        }));
      } else {
        // For other proxies, try to parse as RSS
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const rssItems = xmlDoc.querySelectorAll('item');
        
        items = Array.from(rssItems).map(item => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
          pubDate: item.querySelector('pubDate')?.textContent || '',
          author: item.querySelector('dc\\:creator')?.textContent || username,
          description: item.querySelector('description')?.textContent || '',
          content: item.querySelector('content\\:encoded')?.textContent || '',
          guid: item.querySelector('guid')?.textContent || '',
          categories: Array.from(item.querySelectorAll('category')).map(cat => cat.textContent || '')
        }));
      }
      
      if (items.length === 0) {
        console.warn(`${attempt.name} returned no items`);
        continue;
      }
      
      // Transform the RSS data to our format
      const posts: MediumPost[] = items.slice(0, limit).map((item: any) => {
        const content = item.content || item.description || '';
        const title = item.title || '';
        const extractedImage = extractImageFromContent(content);
        
        return {
          title,
          link: item.link,
          pubDate: formatDate(item.pubDate),
          creator: item.author || item.creator || username,
          contentSnippet: createExcerpt(content),
          content,
          guid: item.guid || item.link,
          categories: item.categories || [],
          thumbnail: extractedImage || getFallbackImage(title, content)
        };
      });
      
      console.log(`Successfully fetched ${posts.length} posts using ${attempt.name}`);
      return posts;
      
    } catch (error) {
      console.warn(`${attempt.name} failed:`, error);
      continue;
    }
  }
  
  // If all attempts failed, throw error
  throw new Error('All Medium RSS feed attempts failed. Please check your Medium username or try again later.');
};

// Hook for using Medium posts in React components
export const useMediumPosts = (username: string, limit: number = 3) => {
  const [feedData, setFeedData] = React.useState<MediumFeedData>({
    posts: [],
    loading: true,
    error: null
  });

  React.useEffect(() => {
    const loadPosts = async () => {
      try {
        setFeedData(prev => ({ ...prev, loading: true, error: null }));
        const posts = await fetchMediumPosts(username, limit);
        setFeedData({ posts, loading: false, error: null });
      } catch (error) {
        setFeedData({
          posts: [],
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to load posts'
        });
      }
    };

    loadPosts();
  }, [username, limit]);

  return feedData;
};

// React import for the hook
import React from 'react';
