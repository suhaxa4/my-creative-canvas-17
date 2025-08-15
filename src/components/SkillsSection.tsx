import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  GitBranch,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-tech-accent",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-success-accent",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "text-warning-accent",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 70 },
        { name: "Linux", level: 85 }
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "text-primary",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "User Research", level: 70 }
      ]
    }
  ];

  const tools = [
    { name: "VS Code", icon: Code },
    { name: "Git", icon: GitBranch },
    { name: "Figma", icon: Palette },
    { name: "Postman", icon: Zap },
    { name: "Vercel", icon: Globe },
    { name: "Mobile Dev", icon: Smartphone }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-glass p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4`}>
                    <Icon className={category.color} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <Card className="bg-glass p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <span className="text-sm font-medium text-center">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Certifications */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              AWS Cloud Practitioner
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              React Developer Certification
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Google Analytics Certified
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Scrum Master
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;