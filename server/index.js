import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Parser from 'rss-parser';

dotenv.config();

const app = express();
const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'content:encoded'],
      ['media:content', 'media:content'],
      ['enclosure', 'enclosure']
    ]
  }
});
const PORT = process.env.PORT || 3001;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

// Middleware
app.use(cors());
app.use(express.json());

// Route to fetch Medium articles
app.get('/api/medium/articles', async (req, res) => {
  try {
    if (!MEDIUM_USERNAME) {
      return res.status(400).json({ 
        error: 'Medium username not configured',
        message: 'Please set MEDIUM_USERNAME in .env file'
      });
    }

    // Medium RSS feed URL
    const feedUrl = `https://medium.com/feed/${MEDIUM_USERNAME}`;
    
    const feed = await parser.parseURL(feedUrl);
    
    // Transform the feed items to a cleaner format
    const articles = feed.items.map(item => {
      // Try to get thumbnail from multiple sources
      let thumbnail = null;
      
      // Check encoded content first
      if (item['content:encoded']) {
        thumbnail = extractThumbnail(item['content:encoded']);
      }
      
      // Fallback to regular content
      if (!thumbnail && item.content) {
        thumbnail = extractThumbnail(item.content);
      }
      
      // Check media:content
      if (!thumbnail && item['media:content']) {
        thumbnail = item['media:content'].$ ? item['media:content'].$.url : null;
      }
      
      // Check enclosure
      if (!thumbnail && item.enclosure && item.enclosure.url) {
        thumbnail = item.enclosure.url;
      }
      
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        author: item.creator,
        description: item.contentSnippet || item.content?.substring(0, 200) + '...',
        categories: item.categories || [],
        thumbnail: thumbnail,
        guid: item.guid
      };
    });

    res.json({
      success: true,
      username: MEDIUM_USERNAME,
      totalArticles: articles.length,
      articles: articles
    });

  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    res.status(500).json({ 
      error: 'Failed to fetch Medium articles',
      message: error.message,
      details: 'Make sure the Medium username is correct and the RSS feed is accessible'
    });
  }
});

// Helper function to extract thumbnail from content
function extractThumbnail(content) {
  if (!content) return null;
  
  // Try multiple patterns to find images
  // Pattern 1: Standard img tag
  let imgRegex = /<img[^>]+src=["']([^"'>]+)["']/i;
  let match = content.match(imgRegex);
  
  if (match && match[1]) {
    return match[1];
  }
  
  // Pattern 2: Medium CDN images (common in Medium RSS)
  imgRegex = /https?:\/\/cdn-images-\d+\.medium\.com\/[^\s"'<>]+/i;
  match = content.match(imgRegex);
  
  if (match && match[0]) {
    return match[0];
  }
  
  // Pattern 3: Any Medium image URL
  imgRegex = /https?:\/\/[^\s"'<>]*medium\.com[^\s"'<>]*\.(jpg|jpeg|png|gif|webp)/i;
  match = content.match(imgRegex);
  
  if (match && match[0]) {
    return match[0];
  }
  
  // Pattern 4: Figure tag with img inside
  imgRegex = /<figure[^>]*>[\s\S]*?<img[^>]+src=["']([^"'>]+)["']/i;
  match = content.match(imgRegex);
  
  if (match && match[1]) {
    return match[1];
  }
  
  return null;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Medium username: ${MEDIUM_USERNAME}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/medium/articles`);
});
