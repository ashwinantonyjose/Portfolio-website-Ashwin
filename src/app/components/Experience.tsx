import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function Experience() {
  const experienceData = [
    {
      role: "UI/UX Design Intern",
      company: "Techgentsia Software Technologies Pvt. Ltd.",
      location: "Alappuzha, Kerala",
      period: "June 2026",
      highlights: [
        "Designed modern and user-centered interfaces, wireframes, and high-fidelity prototypes using Figma.",
        "Applied UI/UX principles to improve usability, visual hierarchy, consistency, and responsive design.",
        "Worked on practical design tasks and strengthened industry-level product design and prototyping skills.",
      ],
    },
    {
      role: "Freelance UI/UX Designer",
      company: "Self-Employed",
      location: "Remote",
      period: "2024 - Present",
      highlights: [
        "Designed responsive website interfaces, landing pages, dashboards, and mobile application screens using Figma.",
        "Created wireframes, user flows, design systems, interactive prototypes, and high-fidelity mockups.",
        "Used AI-assisted workflows and prompt engineering to accelerate ideation, prototyping, and front-end development.",
        "Converted design concepts into responsive web interfaces using HTML, CSS, and JavaScript.",
      ],
    },
    {
      role: "Intern",
      company: "Srishti Campus",
      location: "Kerala",
      period: "June 2025",
      highlights: [
        "Gained practical exposure to software development workflows, problem solving, and project-based learning.",
        "Strengthened technical knowledge through hands-on tasks and collaborative activities.",
      ],
    },
    {
      role: "Intern",
      company: "Techgentsia Software Technologies Pvt. Ltd.",
      location: "Alappuzha, Kerala",
      period: "June 2024",
      highlights: [
        "Gained early industry exposure to software technologies, professional workflows, and team collaboration.",
        "Developed practical understanding of technology-driven project environments.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative bg-[#030303] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            My professional journey and internships
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-white/5 border-white/10 hover:bg-white/[0.07] transition-all duration-300 rounded-3xl backdrop-blur-sm group">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-indigo-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-indigo-500/20">
                      <Briefcase className="w-10 h-10 text-indigo-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-indigo-400 font-medium text-lg">{exp.company}</p>
                        <p className="text-gray-500 mt-1">{exp.location}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:text-right">
                        <div className="inline-flex items-center gap-2 text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="text-gray-400 flex items-start gap-3"
                        >
                          <span className="text-indigo-400 mt-1.5">•</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
