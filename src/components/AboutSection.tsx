import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Heart, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: Heart,
      title: "User-Centered",
      description: "Every project starts with understanding user needs and creating great experiences."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering projects that meet objectives and exceed expectations."
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "Tailwind CSS", "Next.js", "Express", "Docker", "AWS", "Git"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves turning ideas into reality through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started my coding journey 3 years ago and fell in love with the endless possibilities 
              of technology. I specialize in full-stack development with a keen eye for design 
              and user experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Technologies I Love</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image/Placeholder */}
          <div className="relative">
            <Card className="bg-glass p-8 text-center">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Full Stack Developer</h4>
              <p className="text-muted-foreground">
                Passionate about creating amazing digital experiences
              </p>
            </Card>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index} 
                className="bg-glass p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/50"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;