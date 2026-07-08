import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

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
    <section id="projects" className="py-32 relative bg-[#030303] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            A showcase of my recent design projects and explorations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white/5 border-white/10 hover:border-indigo-500/50 transition-all duration-500 h-full rounded-[2rem]">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-black/50 text-white backdrop-blur-md border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}