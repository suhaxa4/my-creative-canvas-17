import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech Cybersecurity",
      institution: "NIIT University",
      duration: "2022 - 2026",
      cgpa: "7.75",
      status: "Current",
      icon: GraduationCap
    },
    {
      degree: "XII (CBSE)",
      institution: "St Andrews Scots Sr Sec School",
      duration: "2022",
      status: "Completed",
      icon: Award
    },
    {
      degree: "X (CBSE)",
      institution: "St Andrews Scots Sr Sec School", 
      duration: "2020",
      status: "Completed",
      icon: Award
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in cybersecurity and information technology.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card key={index} className="bg-glass p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <Badge variant={edu.status === "Current" ? "default" : "secondary"}>
                    {edu.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground mb-3">{edu.institution}</p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar size={16} className="mr-2" />
                  {edu.duration}
                </div>
                
                {edu.cgpa && (
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">CGPA</div>
                    <div className="text-2xl font-bold text-primary">{edu.cgpa}</div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;