import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Mobile App Design",
      description:
        "A modern e-commerce mobile app UI with intuitive navigation, product browsing, and seamless checkout experience designed in Figma.",
      image: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwbW9iaWxlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3Mjg2NTc5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Figma", "UI Design", "Prototyping", "Mobile"],
    },
    {
      title: "Restaurant Website Design",
      description:
        "A clean and elegant restaurant website design featuring menu showcase, online ordering, and booking system with beautiful food photography.",
      image: "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyNzg1NjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Figma", "Web Design", "UX", "Responsive"],
    },
    {
      title: "Poster & Graphic Designs",
      description:
        "A collection of eye-catching posters and graphics for various clients including event promotions, social media content, and brand materials.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3Mjg4NzkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Figma", "Photoshop", "Graphic Design", "Branding"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600">
            A showcase of my design work and creative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}