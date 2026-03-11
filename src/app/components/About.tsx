import { Award, Code, Users } from "lucide-react";
import { Card } from "./ui/card";

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            I'm a BTech student at Carmel College of Engineering and Technology with a strong
            passion for UI/UX design. I specialize in creating intuitive and visually appealing
            designs using Figma. My goal is to craft meaningful digital experiences that solve
            real-world problems and delight users.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}