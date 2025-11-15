import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Technical Product Manager",
      company: "Grubtech",
      period: "June 2025 - Present",
      description: "Leading product vision and roadmap, managing cross-functional teams, and driving technical excellence in cloud kitchen solutions.",
    },
    {
      title: "Technical Product Owner",
      company: "Amused Group",
      period: "Nov 2022 - June 2025",
      description: "Spearheaded Azure Cloud integration, managed product backlog, and delivered scalable betting platform solutions.",
    },
    {
      title: "Technical Product Owner",
      company: "John Keells IT",
      period: "Aug 2022 - Dec 2022",
      description: "Defined product vision and roadmap for enterprise solutions, ensuring alignment with business objectives.",
    },
  ];

  const skills = [
    "React", "Next.js", "React Native", "TypeScript", "JavaScript",
    "Python", "GraphQL", "PostgreSQL", "MongoDB", "Firebase",
    "Tailwind CSS", "Azure Cloud", "Product Management", "UI/UX",
    "Agile/Scrum", "Figma", "Technical Leadership"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            A passionate individual with an undying excitement for the IT industry. I've held extended 
            roles as a Technical Product Owner, Technical Business Analyst, and Software Engineer, 
            bringing unique vision and analytical skills to every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 gradient-card hover:shadow-lg transition-smooth">
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-lg">{exp.title}</h4>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Skills & Expertise</h3>
            </div>
            <Card className="p-6 gradient-card">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 gradient-card">
              <h4 className="font-semibold mb-4">Industry Experience</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Wagering Industry (Racing and Sports Betting)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Fintech Industry
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Healthcare Industry
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Software Solutions - Web & Mobile Applications
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Stock Market Solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Cloud Kitchens
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
