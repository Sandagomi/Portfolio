import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Blue Dream Constructions",
      description: "A Fullstack Web Application for the Blue Dream Constructions company, showcasing project portfolios and client management.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
      Url: "bluedreamgroups.com",
    },
    {
      title: "The Templers Cafe",
      description: "A unique and innovative website for the Templers Cafe, highlighting their menu, ambiance, and customer reviews.",
      technologies: ["React", "Next.js", "MongoDB","Tailwind CSS"],
      Url: "thetemplerscafe.com",
    },
    {
      title: "Zencuit Pvt Ltd",
      description: "A Fullstack Web Application for the Zencuit Pvt Ltd",
      technologies: ["React", "PostgreSQL", "TypeScript", "Redux","Tailwind CSS"],
      Url: "www.zencuit.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A showcase of my fullstack development work, combining technical expertise with 
            product thinking to deliver impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 gradient-card hover:shadow-glow transition-smooth group"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(`https://www.${project.Url}`, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    URL
                  </Button>
                 
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button
            variant="outline"
            onClick={() => window.open("https://github.com/Sandagomi", "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
