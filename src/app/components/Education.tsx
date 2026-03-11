import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "./ui/card";

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
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-indigo-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-indigo-600 font-medium">{edu.institution}</p>
                      <p className="text-gray-600 text-sm">{edu.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <p className="text-gray-900 font-medium mt-1">{edu.gpa}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}