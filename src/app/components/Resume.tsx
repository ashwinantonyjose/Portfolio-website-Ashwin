import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

export function Resume() {
  return (
    <div className="bg-white max-w-[210mm] mx-auto p-8 shadow-lg" id="resume-content">
      {/* Header */}
      <div className="text-center border-b-2 border-indigo-600 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Ashwin Antony Jose</h1>
        <p className="text-xl text-indigo-600 font-semibold mb-4">UI/UX Designer</p>
        
        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>+91 9778232241</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>ashwinantonyjose28@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Alappuzha, Kerala, India</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/ashwin-antony-jose</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Passionate and creative UI/UX Designer with a strong foundation in user-centered design principles. 
          Proficient in creating intuitive, visually appealing interfaces using Figma. Experienced in poster 
          and graphic design with a keen eye for aesthetics and functionality. Seeking opportunities to 
          contribute innovative design solutions in a dynamic environment.
        </p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3">
          Education
        </h2>
        <div className="mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bachelor of Technology (BTech)</h3>
              <p className="text-gray-700">Carmel College of Engineering and Technology</p>
              <p className="text-gray-600 text-sm">Alappuzha, Kerala, India</p>
            </div>
            <p className="text-gray-600 text-sm">Present</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Design Tools</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Figma (Advanced)</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Canva</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Design Specializations</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>UI/UX Design</li>
              <li>User Research</li>
              <li>Wireframing & Prototyping</li>
              <li>Poster Design</li>
              <li>Graphic Design</li>
              <li>Brand Identity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3">
          Core Competencies
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>User Interface Design</li>
            <li>User Experience Design</li>
            <li>Responsive Web Design</li>
            <li>Mobile App Design</li>
            <li>Design Systems</li>
          </ul>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Visual Design</li>
            <li>Typography</li>
            <li>Color Theory</li>
            <li>Interaction Design</li>
            <li>Usability Testing</li>
          </ul>
        </div>
      </section>

      {/* Projects & Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3">
          Design Projects
        </h2>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">UI/UX Design Projects</h3>
          <p className="text-gray-700 leading-relaxed mt-1">
            Designed multiple user interfaces for web and mobile applications focusing on user-centered 
            design principles, creating wireframes, prototypes, and high-fidelity mockups using Figma. 
            Conducted user research and usability testing to ensure optimal user experience.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Graphic & Poster Design</h3>
          <p className="text-gray-700 leading-relaxed mt-1">
            Created engaging posters and graphic designs for various events, campaigns, and social media. 
            Developed visual content that effectively communicates messages while maintaining brand 
            consistency and aesthetic appeal.
          </p>
        </div>
      </section>

      {/* Professional Development */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3">
          Professional Development
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Active contributor on LinkedIn sharing UI/UX design insights and trends</li>
          <li>Continuous learning through design communities and online resources</li>
          <li>Staying updated with latest design tools and industry best practices</li>
        </ul>
      </section>

      {/* Additional Information */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3">
          Additional Information
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Strong communication and collaboration skills</li>
          <li>Ability to work independently and in team environments</li>
          <li>Eager to learn and adapt to new design challenges</li>
          <li>Available for campus placement opportunities</li>
        </ul>
      </section>
    </div>
  );
}

// Function to generate and download resume as PDF
export function downloadResume() {
  window.print();
}
