import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Instagram } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-nav gradient-hero"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Product & Technology Leader
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sandagomi Vihanga
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A passionate Technical Product Manager with 10+ years of experience in software development,
              product strategy, and full-stack development. I transform complex business challenges into 
              elegant technical solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-glow"
                onClick={() => {
                  const element = document.querySelector("#projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Sandagomi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sandagomi-vihanga-induwara/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://medium.com/@sandagomi.v.i"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-smooth"
              >
                <FileText className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sandagomi_vihanga/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:sandagomi.v.i@gmail.com"
                className="p-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
              <img
                src={profileImage}
                alt="Sandagomi Vihanga"
                className="relative rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
