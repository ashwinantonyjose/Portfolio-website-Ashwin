import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Design Tools",
      skills: ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Sketch"],
    },
    {
      category: "UI/UX Skills",
      skills: ["Wireframing", "Prototyping", "User Research", "Usability Testing", "Design Systems"],
    },
    {
      category: "Design Specialties",
      skills: ["Web Design", "Mobile App Design", "Poster Design", "Brand Identity", "Typography"],
    },
    {
      category: "Other Skills",
      skills: ["HTML/CSS", "Responsive Design", "User Flows", "Information Architecture", "Design Thinking"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-lg text-gray-600">
            Design tools and expertise I bring to every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}