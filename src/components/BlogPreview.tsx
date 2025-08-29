import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostCard from '@/components/BlogPostCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState, useEffect } from 'react';

// Your actual Medium posts (hardcoded for now since RSS is being problematic)
const yourMediumPosts = [
  {
    title: "CTRL+Z for Your Whole Project: A Guide to Fixing Git Mistakes (Part 3)",
    contentSnippet: "Okay, So You Broke It. Now What? You're feeling good. You've been following along with this series, you're creating branches, you're merging your work, you're collaborating...",
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*wdk4a4ewG9ErW-3ZCC18xg.png",
    pubDate: "Aug 29, 2025",
    link: "https://medium.com/@figueiroshaun/ctrl-z-for-your-whole-project-a-guide-to-fixing-git-mistakes-part-3-9807fdda73dc",
    guid: "git-part-3",
    categories: ["Git"]
  },
  {
    title: "How to Code With Friends and Not Ruin Everything: A Guide to Git Branches (Part 2)",
    contentSnippet: "Branches are \"parallel universes\" for your code that let you work on new features without breaking the main project. From Solo Artist to Full-Fledged Band...",
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*fk5EVRR3V2zbKMXs67AjaA.png",
    pubDate: "Aug 27, 2025",
    link: "https://medium.com/@figueiroshaun/how-to-code-with-friends-and-not-ruin-everything-a-guide-to-git-branches-part-2-f722f891fcb6",
    guid: "git-part-2",
    categories: ["Git"]
  },
  {
    title: "I Forgot All My Git Commands, So You Don't Have To: A Survivor's Guide",
    contentSnippet: "Let me start with a very 2025 confession: Yes, an AI helped me brainstorm the outline for this and make sure my sentences actually made sense...",
    thumbnail: "https://cdn-images-1.medium.com/max/1024/1*uOEDhznx-iQlPkJ8_EZSuw.png",
    pubDate: "Aug 26, 2025",
    link: "https://medium.com/@figueiroshaun/i-forgot-all-my-git-commands-so-you-dont-have-to-a-survivors-guide-64b2ac52ae0f",
    guid: "git-part-1",
    categories: ["Git"]
  }
];

const BlogPreview = () => {
  const [posts, setPosts] = useState(yourMediumPosts);
  const [loading, setLoading] = useState(false);

  return (
    <section id="blog" className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={20} className="text-black" />
              <span className="text-black font-medium">My Blogs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Latest Articles</h2>
            <p className="text-gray-800 max-w-xl">
              Thoughts on data science, technology, and the journey of building meaningful solutions.
            </p>
          </div>
          <a href="https://medium.com/@figueiroshaun" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0">
            <Button variant="outline" className="group border-black text-black hover:bg-black hover:text-white">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
        
        <div className="relative">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
              <span className="ml-2 text-gray-600">Loading articles...</span>
            </div>
          )}

          {!loading && posts.length > 0 && (
            <>
              <ScrollArea className="w-full">
                <div className="flex gap-6 pb-4 md:hidden overflow-x-auto snap-x snap-mandatory pl-1">
                  {posts.map((post, index) => (
                    <div key={post.guid || index} className="flex-none w-[85%] snap-center">
                      <BlogPostCard
                        title={post.title}
                        excerpt={post.contentSnippet}
                        imageUrl={post.thumbnail}
                        date={post.pubDate}
                        slug={post.link}
                        category="Medium"
                        isExternal={true}
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              {/* Show grid layout on non-mobile screens */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <BlogPostCard
                    key={post.guid || index}
                    title={post.title}
                    excerpt={post.contentSnippet}
                    imageUrl={post.thumbnail}
                    date={post.pubDate}
                    slug={post.link}
                    category="Medium"
                    isExternal={true}
                  />
                ))}
              </div>
              
              <div className="mt-4 flex justify-center md:hidden">
                <div className="flex gap-1">
                  {posts.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-gray-800' : 'w-2 bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {!loading && posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No articles found from @figueiroshaun on Medium</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;