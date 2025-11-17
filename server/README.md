# Portfolio Server

This server provides an API to fetch Medium articles via RSS feed.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Configure environment variables:
- Copy `.env.example` to `.env`
- Set your Medium username in the `.env` file:
```
MEDIUM_USERNAME=@your-medium-username
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Get Medium Articles
```
GET http://localhost:3001/api/medium/articles
```

Returns all published Medium articles for the configured username.

**Response:**
```json
{
  "success": true,
  "username": "@sandagomithilakarathne",
  "totalArticles": 10,
  "articles": [
    {
      "title": "Article Title",
      "link": "https://medium.com/...",
      "pubDate": "2025-11-17T...",
      "author": "Author Name",
      "description": "Article description...",
      "categories": ["tag1", "tag2"],
      "thumbnail": "https://...",
      "guid": "..."
    }
  ]
}
```

### Health Check
```
GET http://localhost:3001/api/health
```

Returns server status.

## Usage in Frontend

```javascript
const response = await fetch('http://localhost:3001/api/medium/articles');
const data = await response.json();
console.log(data.articles);
```
