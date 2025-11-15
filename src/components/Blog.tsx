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
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Note: Medium RSS might have CORS issues. In production, you'd need a backend proxy.
    // For now, we'll show placeholder articles
    const placeholderArticles = [
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
    ];

    // Simulate API call
    setTimeout(() => {
      setArticles(placeholderArticles);
      setLoading(false);
    }, 500);
  }, []);

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
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
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
                className="p-6 gradient-card hover:shadow-glow transition-smooth group cursor-pointer"
                onClick={() => window.open(article.link, "_blank")}
              >
                <div className="flex flex-col h-full">
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
