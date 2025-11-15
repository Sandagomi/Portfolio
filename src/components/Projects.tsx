import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Your Featured Project 1",
      description: "Add your fullstack project description here. Highlight the technologies used, key features, and the problems it solves.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Your Featured Project 2",
      description: "Add your second fullstack project description. Showcase your technical skills and product thinking.",
      technologies: ["Next.js", "MongoDB", "GraphQL", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Your Featured Project 3",
      description: "Add your third fullstack project. Demonstrate your ability to build scalable, production-ready applications.",
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
      demoUrl: "#",
      githubUrl: "#",
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
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
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
            onClick={() => window.open("https://github.com/sandagomi", "_blank")}
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
