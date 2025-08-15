import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/20 blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-hero-gradient-middle/10 blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Your Name</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
              Cybersecurity Student & Threat Detection Specialist
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Focused on strengthening digital defenses and safeguarding critical infrastructure through 
              hands-on experience in threat detection, vulnerability assessment, and digital forensics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group">
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail size={20} />
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up">
            <Card className="bg-glass p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Security Projects</div>
            </Card>
            <Card className="bg-glass p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2">7.75</div>
              <div className="text-muted-foreground">Academic CGPA</div>
            </Card>
            <Card className="bg-glass p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Certifications</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;