import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-tech-accent"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-tech-accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on new projects and meet fellow creators. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="bg-glass p-4 hover:scale-105 transition-all duration-300">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      asChild
                      className={social.color}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon size={20} />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-glass p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="mt-1"
                />
              </div>
              <Button type="submit" size="lg" className="w-full group">
                <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your ideas and bring them to life. I'm available for freelance work and exciting collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg">
                View My Calendar
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;