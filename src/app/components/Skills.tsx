import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "UI/UX & Product Design",
      skills: ["Figma (Expert)", "Wireframing", "High-Fidelity Prototyping", "User Flows", "User Research", "Information Architecture", "Responsive Design"],
    },
    {
      category: "Design Systems",
      skills: ["Component Design", "Auto Layout", "Interactive Prototypes", "Visual Hierarchy", "Design Consistency", "Reusable UI Components"],
    },
    {
      category: "Design Expertise",
      skills: ["Mobile App Design", "Website Design", "Landing Pages", "SaaS Interfaces", "Dashboard Design"],
    },
    {
      category: "AI & Prompt Engineering",
      skills: ["Generative AI", "LLM-Based Development", "Advanced Prompt Design", "AI Coding Workflows", "Code Generation", "UI Generation"],
    },
    {
      category: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React Fundamentals", "Front-End Development"],
    },
    {
      category: "Development Tools",
      skills: ["VS Code", "GitHub", "Netlify", "Render", "Supabase", "MongoDB"],
    },
  ];

  return (
    <section id="skills" className="py-32 relative bg-[#030303]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Design tools and expertise I bring to every project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-white/5 border-white/10 hover:bg-white/[0.07] transition-all duration-300 rounded-3xl h-full backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:text-white border border-indigo-500/20 transition-all cursor-default rounded-xl"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}