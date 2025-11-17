import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Download, Instagram } from "lucide-react";
import resumePdf from "@/assets/Resume/Sandagomi Vihanga Resume.pdf";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sandagomi.v.i@gmail.com",
      href: "mailto:sandagomi.v.i@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 76 615 7067",
      href: "tel:+94766157067",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sandagomi-vihanga-induwara/",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Sandagomi",
      color: "hover:text-foreground",
    },
    {
      icon: FileText,
      label: "Medium",
      href: "https://medium.com/@sandagomi.v.i",
      color: "hover:text-foreground",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/sandagomi_vihanga/",
      color: "hover:text-[#E4405F]",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 gradient-card">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`flex items-start gap-4 group ${
                      item.href !== "#" ? "hover:text-primary" : "pointer-events-none"
                    } transition-smooth`}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 gradient-card">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                Let's connect on social media and professional networks. I'm always happy to network and share insights.
              </p>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`justify-start ${social.color} transition-smooth`}
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <social.icon className="w-5 h-5 mr-3" />
                    {social.label}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-8 gradient-card text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-full">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Want to Know More?</h3>
              <p className="text-muted-foreground mb-2 max-w-2xl">
                Download my comprehensive CV for detailed information about my experience, skills, and achievements.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-glow"
                onClick={() => window.open(resumePdf, '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download My CV
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
