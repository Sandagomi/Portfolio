import { Github, Linkedin, Mail, FileText, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sandagomi Vihanga
            </h3>
            <p className="text-sm text-muted-foreground">
              Technical Product Manager & Full-Stack Developer passionate about building 
              impactful solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-smooth">About</a>
              <a href="#projects" className="hover:text-primary transition-smooth">Projects</a>
              <a href="#blog" className="hover:text-primary transition-smooth">Blog</a>
              <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Sandagomi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sandagomi-vihanga-induwara/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://medium.com/@sandagomi.v.i"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth"
              >
                <FileText className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sandagomi_vihanga/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:sandagomi.v.i@gmail.com"
                className="p-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Sandagomi Vihanga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
