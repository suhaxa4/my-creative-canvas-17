import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Threat Detection Through Honeypot Data",
      description: "Developed a cloud-hosted honeypot using React.js, Node.js, MongoDB, and Cowrie Honeypot for real-time threat intelligence visualization with API integration (OTX, AbuseIPDB).",
      image: "🛡️",
      technologies: ["React.js", "Node.js", "MongoDB", "Cowrie"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Honeypot Deployment on NVR Systems",
      description: "Deployed honeypots for SSH, HTTP, RTSP, and ONVIF protocols to simulate vulnerable NVR IoT devices. Dockerized for scalable deployment with comprehensive log aggregation.",
      image: "📹",
      technologies: ["Docker", "SSH", "HTTP", "ONVIF"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "HID Device Emulation Attack",
      description: "Programmed an Arduino to emulate a Human Interface Device (HID) for keystroke injection attacks, establishing reverse connections with Metasploit and HoaxShell.",
      image: "🔧",
      technologies: ["Arduino", "Metasploit", "HoaxShell", "HID"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Cisco Network Security Solution",
      description: "Developed network security policies and ACLs to address campus resource misuse by restricting access to irrelevant websites using Cisco Packet Tracer.",
      image: "🌐",
      technologies: ["Cisco Packet Tracer", "ACLs", "Network Policies"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-glass overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="bg-glass p-6 hover:scale-105 transition-all duration-300 group">
                <div className="text-4xl mb-4">{project.image}</div>
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="p-2">
                    <ExternalLink size={16} />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Github size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Button size="lg" className="group">
              Get In Touch
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
