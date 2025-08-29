
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  slug: string;
  category: string;
  isExternal?: boolean;
}

const BlogPostCard = ({
  title,
  excerpt,
  imageUrl,
  date,
  slug,
  category,
  isExternal = false
}: BlogPostCardProps) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  const fallbackImage = "https://images.unsplash.com/photo-1509098681029-6832da980900?w=800&h=400&fit=crop&crop=entropy&auto=format&q=80";
  const displayImage = imgError ? fallbackImage : imageUrl;

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isExternal) {
      return (
        <a href={slug} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={`/blog/${slug}`}>
        {children}
      </Link>
    );
  };

  return (
    <CardWrapper>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="grid grid-rows-[200px,1fr]">
          <div className="relative overflow-hidden bg-gray-200">
            <img
              src={displayImage}
              alt={title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImgLoaded(true)}
              onError={() => {
                setImgError(true);
                setImgLoaded(true);
              }}
            />
            {!imgLoaded && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse" />
            )}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white inline-block">
                {category}
              </span>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-500 text-sm mb-2">{date}</p>
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
            <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
            <Button variant="outline" className="group mt-auto">
              Read more 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </CardWrapper>
  );
};

export default BlogPostCard;
