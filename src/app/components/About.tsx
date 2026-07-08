import { Award, Code, Users } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Design Thinking",
      description: "Creating user-centered designs with focus on usability and aesthetics",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working effectively with developers and stakeholders",
    },
    {
      icon: Award,
      title: "Detail-Oriented",
      description: "Ensuring pixel-perfect designs and seamless user experiences",
    },
  ];

  return (
    <section id="about" className="py-32 relative bg-[#030303] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            I'm a BTech student at Carmel College of Engineering and Technology with a strong
            passion for UI/UX design. I specialize in creating intuitive and visually appealing
            designs using Figma. My goal is to craft meaningful digital experiences that solve
            real-world problems and delight users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-8 text-center bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group h-full rounded-3xl">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-indigo-500/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}