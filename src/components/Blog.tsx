import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  description?: string;
  author?: string;
  categories?: string[];
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMediumArticles();
  }, []);

  const fetchMediumArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:3001/api/medium/articles');
      
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await response.json();
      
      if (data.success && data.articles) {
        // Keep only the 6 most recent articles
        setArticles(data.articles.slice(0, 6));
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Error fetching Medium articles:', err);
      setError('Unable to load articles. Make sure the server is running.');
      
      // Fallback to placeholder articles (limited to 6)
      setArticles([
        {
          title: "Your Latest Medium Article 1",
          link: "https://medium.com/@sandagomi.v.i",
          pubDate: new Date().toISOString(),
          description: "Click to read your latest insights on product management and development...",
        },
        {
          title: "Your Latest Medium Article 2",
          link: "https://medium.com/@sandagomi.v.i",
          pubDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          description: "Explore more of your thoughts on technology and innovation...",
        },
        {
          title: "Your Latest Medium Article 3",
          link: "https://medium.com/@sandagomi.v.i",
          pubDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
          description: "Discover your perspectives on fullstack development...",
        },
        {
          title: "Your Latest Medium Article 4",
          link: "https://medium.com/@sandagomi.v.i",
          pubDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
          description: "Learn about software architecture and best practices...",
        },
        {
          title: "Your Latest Medium Article 5",
          link: "https://medium.com/@sandagomi.v.i",
          pubDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
          description: "Insights on agile methodologies and team collaboration...",
        },
        {
          title: "Your Latest Medium Article 6",
          link: "https://medium.com/@sandagomi.v.i",
          pubDate: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
          description: "Deep dive into cloud technologies and DevOps practices...",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-accent/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-4xl font-bold">Blog & Insights</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            My thoughts on product management, software development, and the tech industry.
            Read more on Medium.
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-600">
              {error}
            </div>
          )}
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-4 bg-muted rounded mb-4"></div>
                <div className="h-3 bg-muted rounded mb-2"></div>
                <div className="h-3 bg-muted rounded w-2/3"></div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="gradient-card hover:shadow-glow transition-smooth group cursor-pointer overflow-hidden"
                onClick={() => window.open(article.link, "_blank")}
              >
                <div className="flex flex-col h-full">
                  {article.thumbnail ? (
                    <div className="mb-4">
                      <img 
                        src={article.thumbnail} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 bg-gradient-to-br from-accent/20 to-primary/20 h-48 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-accent/40" />
                    </div>
                  )}
                  <div className="px-6 pb-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {formatDate(article.pubDate)}
                    </p>
                    {article.description && (
                      <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                        {article.description}
                      </p>
                    )}
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-smooth">
                      Read More
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:ml-0 transition-smooth" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            onClick={() => window.open("https://medium.com/@sandagomi.v.i", "_blank")}
            className="bg-accent hover:bg-accent/90"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            View All Articles on Medium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
