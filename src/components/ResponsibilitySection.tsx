import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Megaphone, Shield, Heart } from "lucide-react";

const ResponsibilitySection = () => {
  const positions = [
    {
      title: "Volunteer & Lead - Public Relations",
      organization: "Ingenuity",
      duration: "2022-2024",
      type: "Leadership",
      icon: Megaphone,
      responsibilities: [
        "Coordinated outreach and communication with participants",
        "Managed event promotion across multiple channels",
        "Led a team of volunteers for smooth PR activities execution"
      ]
    },
    {
      title: "Vice-Captain & Captain - White House",
      organization: "NIIT University",
      duration: "Jan 2024-2025",
      type: "Leadership",
      icon: Users,
      responsibilities: [
        "Organized inter-house competitions and motivated team members",
        "Represented the house in cultural and sports events",
        "Fostered teamwork and discipline among house members"
      ]
    },
    {
      title: "NSS Volunteer",
      organization: "National Service Scheme",
      duration: "2022-Present",
      type: "Community Service",
      icon: Heart,
      responsibilities: [
        "Participated in various community service initiatives",
        "Contributed to projects addressing social issues",
        "Supported underprivileged communities through organized programs"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Positions of <span className="text-gradient">Responsibility</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leadership and community service experiences that shaped my professional development.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {positions.map((position, index) => {
            const Icon = position.icon;
            return (
              <Card key={index} className="bg-glass p-8 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-center lg:items-start gap-4 lg:flex-col lg:text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {position.type}
                    </Badge>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                        <p className="text-lg text-muted-foreground">{position.organization}</p>
                      </div>
                      <Badge variant="secondary" className="self-start lg:self-center">
                        {position.duration}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-3">
                      {position.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilitySection;