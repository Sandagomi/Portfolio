# Sandagomi Vihanga - Portfolio Website# Sandagomi Vihanga - Portfolio# Welcome to your Lovable project



A modern, responsive portfolio website built to showcase my work as a Technical Product Manager and Full-Stack Developer. Features dynamic blog integration, downloadable CV, and a comprehensive project showcase.



![Portfolio Preview](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue) ![Vite](https://img.shields.io/badge/Vite-5.4-purple)A modern, responsive portfolio website showcasing my work as a Technical Product Manager and Full-Stack Developer.## Project info



## 🌟 Features



- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices## Features**URL**: https://lovable.dev/projects/1921413f-c802-40b4-932d-3f254deb3a55

- **Dark/Light Theme** - Automatic theme switching support

- **Medium Blog Integration** - Real-time RSS feed from Medium articles

- **Animated UI** - Smooth transitions and engaging micro-interactions

- **Downloadable CV** - Easy access to professional resume- **Responsive Design**: Optimized for all devices## How can I edit this code?

- **Project Showcase** - Featured development work with live links

- **Contact Forms** - Multiple ways to get in touch- **Dark/Light Mode**: Theme switching support

- **Social Integration** - Direct links to GitHub, LinkedIn, Medium, and Instagram

- **Medium Blog Integration**: Automatically fetches latest articles via RSSThere are several ways of editing your application.

## 🛠️ Tech Stack

- **Animated Components**: Smooth transitions and engaging animations

### Frontend

- **Framework:** React 18 with TypeScript- **CV Download**: Easy access to detailed resume**Use Lovable**

- **Build Tool:** Vite 5

- **Styling:** Tailwind CSS- **Project Showcase**: Featured development projects

- **UI Components:** shadcn/ui

- **Icons:** Lucide React- **Contact Section**: Multiple ways to connectSimply visit the [Lovable Project](https://lovable.dev/projects/1921413f-c802-40b4-932d-3f254deb3a55) and start prompting.

- **Routing:** React Router



### Backend (API Server)

- **Runtime:** Node.js with Express.js## Tech StackChanges made via Lovable will be committed automatically to this repo.

- **RSS Parsing:** rss-parser

- **CORS:** cors middleware

- **Environment:** dotenv

### Frontend**Use your preferred IDE**

## 📂 Project Structure

- **React 18** with TypeScript

```

my-digital-portfolio/- **Vite** - Fast build toolIf you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

├── src/

│   ├── components/          # React components- **Tailwind CSS** - Utility-first styling

│   │   ├── About.tsx       # About section with experience

│   │   ├── Blog.tsx        # Medium blog integration- **shadcn/ui** - High-quality UI componentsThe only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

│   │   ├── Contact.tsx     # Contact information

│   │   ├── Footer.tsx      # Site footer- **Lucide React** - Beautiful icons

│   │   ├── Hero.tsx        # Landing section

│   │   ├── Navigation.tsx  # Navigation barFollow these steps:

│   │   ├── Projects.tsx    # Project showcase

│   │   └── Technologies.tsx # Tech stack display### Backend (Server)

│   ├── assets/             # Images and static files

│   │   ├── Resume/         # CV/Resume files- **Express.js** - API server```sh

│   │   └── Technologies/   # Technology logos

│   ├── pages/              # Page components- **RSS Parser** - Medium article fetching# Step 1: Clone the repository using the project's Git URL.

│   ├── index.css           # Global styles

│   └── main.tsx            # Application entry point- **CORS** - Cross-origin supportgit clone <YOUR_GIT_URL>

├── server/                 # Backend API

│   ├── index.js           # Express server

│   ├── package.json       # Server dependencies

│   └── .env               # Environment variables## Getting Started# Step 2: Navigate to the project directory.

├── public/                 # Static assets

└── package.json           # Project dependenciescd <YOUR_PROJECT_NAME>

```

### Prerequisites

## 🚀 Getting Started

- Node.js 18+ and npm# Step 3: Install the necessary dependencies.

### Prerequisites

- Gitnpm i

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)

- **npm** (v9 or higher)

- **Git**### Installation# Step 4: Start the development server with auto-reloading and an instant preview.



### Installationnpm run dev



1. **Clone the repository**1. Clone the repository:```

   ```bash

   git clone https://github.com/Sandagomi/Portfolio.git```bash

   cd my-digital-portfolio

   ```git clone https://github.com/Sandagomi/Portfolio.git**Edit a file directly in GitHub**



2. **Install frontend dependencies**cd my-digital-portfolio

   ```bash

   npm install```- Navigate to the desired file(s).

   ```

- Click the "Edit" button (pencil icon) at the top right of the file view.

3. **Install server dependencies**

   ```bash2. Install frontend dependencies:- Make your changes and commit the changes.

   cd server

   npm install```bash

   cd ..

   ```npm install**Use GitHub Codespaces**



### Configuration```



Create a `.env` file in the `server/` directory:- Navigate to the main page of your repository.



```env3. Install server dependencies:- Click on the "Code" button (green button) near the top right.

PORT=3001

MEDIUM_USERNAME=@sandagomi.v.i```bash- Select the "Codespaces" tab.

```

cd server- Click on "New codespace" to launch a new Codespace environment.

### Running the Application

npm install- Edit files directly within the Codespace and commit and push your changes once you're done.

1. **Start the backend server** (Terminal 1)

   ```bash```

   cd server

   npm start## What technologies are used for this project?

   ```

   The API server will run on `http://localhost:3001`### Configuration



2. **Start the frontend** (Terminal 2)This project is built with:

   ```bash

   npm run devCreate a `.env` file in the `server` directory:

   ```

   The portfolio will be available at `http://localhost:8080````- Vite



## 🏗️ Building for ProductionPORT=3001- TypeScript



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
