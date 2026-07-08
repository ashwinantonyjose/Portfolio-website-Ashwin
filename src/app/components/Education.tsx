import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Carmel College of Engineering and Technology",
      location: "Alappuzha, Kerala, India",
      period: "2022 - 2026",
      gpa: "Pursuing",
      highlights: [
        "Specializing in UI/UX Design and Human-Computer Interaction",
        "Active participant in design workshops and hackathons",
        "Focus on creating user-centered digital solutions",
        "Building strong foundation in design thinking and problem-solving",
      ],
    },
  ];

  return (
    <section id="education" className="py-32 relative bg-[#030303] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
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
                      <GraduationCap className="w-10 h-10 text-indigo-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-indigo-400 font-medium text-lg">{edu.institution}</p>
                        <p className="text-gray-500 mt-1">{edu.location}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:text-right">
                        <div className="inline-flex items-center gap-2 text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{edu.period}</span>
                        </div>
                        <p className="text-white font-medium mt-3 px-3 py-1 bg-indigo-500/20 inline-block rounded-md border border-indigo-500/30 text-sm">
                          {edu.gpa}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
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