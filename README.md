# Sandagomi Vihanga - Portfolio Website# Sandagomi Vihanga - Portfolio Website# Sandagomi Vihanga



A modern, responsive portfolio website showcasing my work as a Technical Product Manager and Full-Stack Developer. Features dynamic blog integration with Medium, downloadable CV, and comprehensive project showcase.





## 🌟 Features



- **Responsive Design** - Optimized for all devices
  
- **Dark/Light Theme** - Automatic theme switching

- **Medium Blog Integration** - Real-time RSS feed fetching

- **Animated UI** - Smooth transitions and micro-interactions

- **Downloadable CV** - Easy resume access## 🌟 Features

- **Project Showcase** - Featured development work

- **Social Integration** - GitHub, LinkedIn, Medium, Instagram


### Frontend- **Dark/Light Theme** - Automatic theme switching support

- React 18 with TypeScript

- Vite 5- **Medium Blog Integration** - Real-time RSS feed from Medium articles

- Tailwind CSS

- shadcn/ui components- **Animated UI** - Smooth transitions and engaging micro-interactions

- Lucide React icons

- **Downloadable CV** - Easy access to professional resume- **Responsive Design**: Optimized for all devices## How can I edit this code?

### Backend

- Node.js with Express.js- **Project Showcase** - Featured development work with live links

- RSS Parser for Medium articles

- CORS middleware- **Contact Forms** - Multiple ways to get in touch- **Dark/Light Mode**: Theme switching support



## 📂 Project Structure- **Social Integration** - Direct links to GitHub, LinkedIn, Medium, and Instagram



```- **Medium Blog Integration**: Automatically fetches latest articles via RSSThere are several ways of editing your application.

my-digital-portfolio/

├── src/## 🛠️ Tech Stack

│   ├── components/         # React components

│   ├── assets/            # Images and static files- **Animated Components**: Smooth transitions and engaging animations

│   ├── pages/             # Page components

│   └── main.tsx           # Entry point### Frontend

├── server/                # Backend API

│   ├── index.js          # Express server- **Framework:** React 18 with TypeScript- **CV Download**: Easy access to detailed resume**Use Lovable**

│   ├── package.json      # Server dependencies

│   └── .env              # Environment variables- **Build Tool:** Vite 5

├── public/               # Static assets

└── render.yaml           # Render deployment config- **Styling:** Tailwind CSS- **Project Showcase**: Featured development projects

```

- **UI Components:** shadcn/ui

## 🚀 Getting Started

- **Icons:** Lucide React- **Contact Section**: Multiple ways to connectSimply visit the [Lovable Project](https://lovable.dev/projects/1921413f-c802-40b4-932d-3f254deb3a55) and start prompting.

### Prerequisites

- Node.js (v18+)- **Routing:** React Router

- npm (v9+)

- Git



### Installation### Backend (API Server)



1. Clone the repository:- **Runtime:** Node.js with Express.js## Tech StackChanges made via Lovable will be committed automatically to this repo.

```bash

git clone https://github.com/Sandagomi/Portfolio.git- **RSS Parsing:** rss-parser

cd my-digital-portfolio

```- **CORS:** cors middleware



2. Install frontend dependencies:- **Environment:** dotenv

```bash

npm install### Frontend**Use your preferred IDE**

```

## 📂 Project Structure

3. Install server dependencies:

```bash- **React 18** with TypeScript

cd server

npm install```

cd ..

```my-digital-portfolio/- **Vite** - Fast build toolIf you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.



### Configuration├── src/



Create `.env` in the `server/` directory:│   ├── components/          # React components- **Tailwind CSS** - Utility-first styling

```env

PORT=3001│   │   ├── About.tsx       # About section with experience

MEDIUM_USERNAME=@sandagomi.v.i

```│   │   ├── Blog.tsx        # Medium blog integration- **shadcn/ui** - High-quality UI componentsThe only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)



Create `.env` in the root directory:│   │   ├── Contact.tsx     # Contact information

```env

VITE_API_URL=http://localhost:3001│   │   ├── Footer.tsx      # Site footer- **Lucide React** - Beautiful icons

```

│   │   ├── Hero.tsx        # Landing section

### Running Locally

│   │   ├── Navigation.tsx  # Navigation barFollow these steps:

1. Start the backend (Terminal 1):

```bash│   │   ├── Projects.tsx    # Project showcase

cd server

npm start│   │   └── Technologies.tsx # Tech stack display### Backend (Server)

```

│   ├── assets/             # Images and static files

2. Start the frontend (Terminal 2):

```bash│   │   ├── Resume/         # CV/Resume files- **Express.js** - API server```sh

npm run dev

```│   │   └── Technologies/   # Technology logos



Visit `http://localhost:8080`│   ├── pages/              # Page components- **RSS Parser** - Medium article fetching# Step 1: Clone the repository using the project's Git URL.



## 🌐 Deployment to Render│   ├── index.css           # Global styles



This project is configured for easy deployment to Render using the included `render.yaml` file.│   └── main.tsx            # Application entry point- **CORS** - Cross-origin supportgit clone <YOUR_GIT_URL>



### Prerequisites├── server/                 # Backend API

- GitHub account with this repository

- Render account (free tier available)│   ├── index.js           # Express server



### Deployment Steps│   ├── package.json       # Server dependencies



1. **Push to GitHub**:│   └── .env               # Environment variables## Getting Started# Step 2: Navigate to the project directory.

```bash

git add .├── public/                 # Static assets

git commit -m "Ready for Render deployment"

git push origin main└── package.json           # Project dependenciescd <YOUR_PROJECT_NAME>

```

```

2. **Connect to Render**:

   - Go to [Render Dashboard](https://dashboard.render.com/)### Prerequisites

   - Click **"New +"** → **"Blueprint"**

   - Connect your GitHub account## 🚀 Getting Started

   - Select the `Portfolio` repository

   - Render will automatically detect `render.yaml`- Node.js 18+ and npm# Step 3: Install the necessary dependencies.



3. **Configure Services**:### Prerequisites

   

   The `render.yaml` file automatically creates:- Gitnpm i

   - **portfolio-api** - Backend server (Node.js)

   - **portfolio-frontend** - Static site (React/Vite)Before you begin, ensure you have the following installed:



4. **Update Environment Variables**:- **Node.js** (v18 or higher)

   

   After deployment, you'll get a backend URL like:- **npm** (v9 or higher)

   `https://portfolio-api.onrender.com`

   - **Git**### Installation# Step 4: Start the development server with auto-reloading and an instant preview.

   Update your frontend `.env`:

   ```env

   VITE_API_URL=https://portfolio-api.onrender.com

   ```### Installationnpm run dev

   

   Commit and push this change:

   ```bash

   git add .env1. **Clone the repository**1. Clone the repository:```

   git commit -m "Update API URL for production"

   git push origin main   ```bash

   ```

   git clone https://github.com/Sandagomi/Portfolio.git```bash

5. **Access Your Portfolio**:

      cd my-digital-portfolio

   Frontend URL: `https://portfolio-frontend.onrender.com`

      ```git clone https://github.com/Sandagomi/Portfolio.git**Edit a file directly in GitHub**

   Backend API: `https://portfolio-api.onrender.com`



### Important Notes

2. **Install frontend dependencies**cd my-digital-portfolio

- **Free Tier Limitations**: Render's free tier spins down after 15 minutes of inactivity. First request may take 30-60 seconds.

- **Custom Domain**: You can add a custom domain in Render dashboard under Service → Settings → Custom Domain   ```bash

- **Auto-Deploy**: Any push to `main` branch will automatically redeploy

   npm install```- Navigate to the desired file(s).

### Manual Deployment (Alternative)

   ```

If you prefer manual setup instead of Blueprint:

- Click the "Edit" button (pencil icon) at the top right of the file view.

**Backend Deployment:**

1. New Web Service → Connect repository3. **Install server dependencies**

2. Name: `portfolio-api`

3. Root Directory: `server`   ```bash2. Install frontend dependencies:- Make your changes and commit the changes.

4. Build Command: `npm install`

5. Start Command: `npm start`   cd server

6. Environment Variables:

   - `PORT=3001`   npm install```bash

   - `MEDIUM_USERNAME=@sandagomi.v.i`

   cd ..

**Frontend Deployment:**

1. New Static Site → Connect repository   ```npm install**Use GitHub Codespaces**

2. Name: `portfolio-frontend`

3. Build Command: `npm install && npm run build`

4. Publish Directory: `dist`

5. Environment Variables:### Configuration```

   - `VITE_API_URL=<your-backend-url>`



## 📝 API Endpoints

Create a `.env` file in the `server/` directory:- Navigate to the main page of your repository.

### Get Medium Articles

```

GET /api/medium/articles

``````env3. Install server dependencies:- Click on the "Code" button (green button) near the top right.

Returns latest Medium articles with thumbnails

PORT=3001

### Health Check

```MEDIUM_USERNAME=@sandagomi.v.i```bash- Select the "Codespaces" tab.

GET /api/health

``````

Server status check

cd server- Click on "New codespace" to launch a new Codespace environment.

## 🎨 Customization

### Running the Application

### Update Projects

Edit `src/components/Projects.tsx`npm install- Edit files directly within the Codespace and commit and push your changes once you're done.



### Update Experience1. **Start the backend server** (Terminal 1)

Edit `src/components/About.tsx`

   ```bash```

### Change Technologies

Edit `src/components/Technologies.tsx`   cd server



## 🔗 Links   npm start## What technologies are used for this project?



- **Portfolio**: https://portfolio-frontend.onrender.com   ```

- **GitHub**: https://github.com/Sandagomi

- **LinkedIn**: https://www.linkedin.com/in/sandagomi-vihanga-induwara/   The API server will run on `http://localhost:3001`### Configuration

- **Medium**: https://medium.com/@sandagomi.v.i

- **Instagram**: https://www.instagram.com/sandagomi_vihanga/



## 📧 Contact2. **Start the frontend** (Terminal 2)This project is built with:



**Email**: sandagomi.v.i@gmail.com     ```bash

**Phone**: +94 76 615 7067  

**Location**: Colombo, Sri Lanka   npm run devCreate a `.env` file in the `server` directory:



## 📄 License   ```



© 2025 Sandagomi Vihanga. All rights reserved.   The portfolio will be available at `http://localhost:8080````- Vite



---



**Built with ❤️ by Sandagomi Vihanga**## 🏗️ Building for ProductionPORT=3001- TypeScript




Create an optimized production build:MEDIUM_USERNAME=@sandagomi.v.i- React



```bash```- shadcn-ui

npm run build

```- Tailwind CSS



The build output will be in the `dist/` directory, ready for deployment.### Running Locally



Preview the production build locally:## How can I deploy this project?

```bash

npm run preview1. Start the backend server:

```

```bashSimply open [Lovable](https://lovable.dev/projects/1921413f-c802-40b4-932d-3f254deb3a55) and click on Share -> Publish.

## 🌐 Deployment

cd server

### Frontend Deployment

npm start## Can I connect a custom domain to my Lovable project?

The `dist/` folder can be deployed to any static hosting service:

```

- **Vercel** (Recommended)

  ```bashYes, you can!

  npm install -g vercel

  vercel --prod2. Start the frontend (in a new terminal):

  ```

```bashTo connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

- **Netlify**

  - Connect your GitHub repositorynpm run dev

  - Build command: `npm run build`

  - Publish directory: `dist````Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)



- **GitHub Pages**

  - Push the `dist/` folder to `gh-pages` branchThe portfolio will be available at `http://localhost:8080`



- **AWS S3 + CloudFront**The API server runs at `http://localhost:3001`

  - Upload `dist/` contents to S3 bucket

  - Configure CloudFront distribution## Building for Production



### Backend Deployment```bash

npm run build

Deploy the `server/` directory to a Node.js hosting platform:```



- **Railway**The optimized build will be in the `dist/` directory.

  - Connect GitHub repository

  - Auto-deploy on push## Deployment



- **Heroku**### Frontend

  ```bashDeploy the `dist/` folder to any static hosting service:

  heroku create- Vercel

  git subtree push --prefix server heroku main- Netlify

  ```- GitHub Pages

- AWS S3 + CloudFront

- **DigitalOcean App Platform**

  - Connect repository### Backend (Server)

  - Specify `server/` as source directoryDeploy the `server/` directory to:

- Heroku

- **AWS EC2/Lambda**- Railway

  - Package server code- AWS EC2/Lambda

  - Deploy with PM2 or Serverless framework- DigitalOcean



**Important:** Update the API endpoint URL in `src/components/Blog.tsx` to point to your deployed backend server.## Social Links



## 📝 API Documentation- GitHub: [https://github.com/Sandagomi](https://github.com/Sandagomi)

- LinkedIn: [https://www.linkedin.com/in/sandagomi-vihanga-induwara/](https://www.linkedin.com/in/sandagomi-vihanga-induwara/)

### Medium Articles Endpoint- Medium: [https://medium.com/@sandagomi.v.i](https://medium.com/@sandagomi.v.i)

- Instagram: [https://www.instagram.com/sandagomi_vihanga/](https://www.instagram.com/sandagomi_vihanga/)

**GET** `/api/medium/articles`

## License

Fetches the latest articles from Medium RSS feed.

© 2025 Sandagomi Vihanga. All rights reserved.

**Response:**
```json
{
  "success": true,
  "username": "@sandagomi.v.i",
  "totalArticles": 10,
  "articles": [
    {
      "title": "Article Title",
      "link": "https://medium.com/...",
      "pubDate": "2025-11-17T...",
      "author": "Sandagomi Vihanga",
      "description": "Article excerpt...",
      "categories": ["Technology", "Product"],
      "thumbnail": "https://...",
      "guid": "unique-id"
    }
  ]
}
```

### Health Check

**GET** `/api/health`

Returns server status.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2025-11-17T..."
}
```

## 🎨 Customization

### Adding Projects

Edit `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript", "Node.js"],
    Url: "project-url.com",
  },
  // Add more projects...
];
```

### Updating Experience

Edit `src/components/About.tsx`:

```typescript
const experiences = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Month Year - Present",
    description: "Role description...",
  },
  // Add more experiences...
];
```

### Changing Technologies

Edit `src/components/Technologies.tsx` to add/remove technology icons.

## 🔗 Social Links

- **GitHub:** [https://github.com/Sandagomi](https://github.com/Sandagomi)
- **LinkedIn:** [https://www.linkedin.com/in/sandagomi-vihanga-induwara/](https://www.linkedin.com/in/sandagomi-vihanga-induwara/)
- **Medium:** [https://medium.com/@sandagomi.v.i](https://medium.com/@sandagomi.v.i)
- **Instagram:** [https://www.instagram.com/sandagomi_vihanga/](https://www.instagram.com/sandagomi_vihanga/)

## 📧 Contact

**Email:** sandagomi.v.i@gmail.com  
**Phone:** +94 76 615 7067  
**Location:** Colombo, Sri Lanka

## 📄 License

© 2025 Sandagomi Vihanga. All rights reserved.

This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio, but please give credit where appropriate.

---

**Built with ❤️ by Sandagomi Vihanga**
