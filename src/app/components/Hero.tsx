import { Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "../../assets/profile.png";
import { motion } from "motion/react";

const handleDownloadResume = () => {
  // Create a new window with the resume
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ashwin Antony Jose - Resume</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; padding: 20px; max-width: 210mm; margin: 0 auto; }
    .header { text-align: center; border-bottom: 3px solid #4F46E5; padding-bottom: 20px; margin-bottom: 20px; }
    h1 { font-size: 32px; color: #1F2937; margin-bottom: 5px; }
    .title { font-size: 18px; color: #4F46E5; font-weight: 600; margin-bottom: 15px; }
    .contact-info { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; font-size: 12px; }
    .contact-item { display: flex; align-items: center; gap: 5px; }
    h2 { font-size: 20px; color: #1F2937; border-bottom: 2px solid #D1D5DB; padding-bottom: 8px; margin: 20px 0 12px 0; }
    p, li { font-size: 13px; color: #4B5563; margin-bottom: 8px; }
    .section { margin-bottom: 20px; }
    .subsection { margin-bottom: 15px; }
    h3 { font-size: 15px; color: #1F2937; margin-bottom: 5px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
    ul { margin-left: 20px; }
    @media print {
      body { padding: 0; }
      @page { margin: 20mm; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Ashwin Antony Jose</h1>
    <p class="title">UI/UX Designer</p>
    <div class="contact-info">
      <div class="contact-item">📞 +91 9778232241</div>
      <div class="contact-item">✉️ ashwinantonyjose28@gmail.com</div>
      <div class="contact-item">📍 Alappuzha, Kerala, India</div>
      <div class="contact-item">🔗 linkedin.com/in/ashwin-antony-jose</div>
    </div>
  </div>

  <div class="section">
    <h2>Professional Summary</h2>
    <p>Passionate and creative UI/UX Designer with a strong foundation in user-centered design principles. Proficient in creating intuitive, visually appealing interfaces using Figma. Experienced in poster and graphic design with a keen eye for aesthetics and functionality. Seeking opportunities to contribute innovative design solutions in a dynamic environment.</p>
  </div>

  <div class="section">
    <h2>Education</h2>
    <div class="subsection">
      <h3>Bachelor of Technology (BTech)</h3>
      <p><strong>Carmel College of Engineering and Technology</strong></p>
      <p>Alappuzha, Kerala, India</p>
    </div>
  </div>

  <div class="section">
    <h2>Technical Skills</h2>
    <div class="grid">
      <div>
        <h3>Design Tools</h3>
        <ul>
          <li>Figma (Advanced)</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Canva</li>
        </ul>
      </div>
      <div>
        <h3>Design Specializations</h3>
        <ul>
          <li>UI/UX Design</li>
          <li>User Research</li>
          <li>Wireframing & Prototyping</li>
          <li>Poster Design</li>
          <li>Graphic Design</li>
          <li>Brand Identity</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>Core Competencies</h2>
    <div class="grid">
      <ul>
        <li>User Interface Design</li>
        <li>User Experience Design</li>
        <li>Responsive Web Design</li>
        <li>Mobile App Design</li>
        <li>Design Systems</li>
      </ul>
      <ul>
        <li>Visual Design</li>
        <li>Typography</li>
        <li>Color Theory</li>
        <li>Interaction Design</li>
        <li>Usability Testing</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <h2>Design Projects</h2>
    <div class="subsection">
      <h3>UI/UX Design Projects</h3>
      <p>Designed multiple user interfaces for web and mobile applications focusing on user-centered design principles, creating wireframes, prototypes, and high-fidelity mockups using Figma. Conducted user research and usability testing to ensure optimal user experience.</p>
    </div>
    <div class="subsection">
      <h3>Graphic & Poster Design</h3>
      <p>Created engaging posters and graphic designs for various events, campaigns, and social media. Developed visual content that effectively communicates messages while maintaining brand consistency and aesthetic appeal.</p>
    </div>
  </div>

  <div class="section">
    <h2>Professional Development</h2>
    <ul>
      <li>Active contributor on LinkedIn sharing UI/UX design insights and trends</li>
      <li>Continuous learning through design communities and online resources</li>
      <li>Staying updated with latest design tools and industry best practices</li>
    </ul>
  </div>

  <div class="section">
    <h2>Additional Information</h2>
    <ul>
      <li>Strong communication and collaboration skills</li>
      <li>Ability to work independently and in team environments</li>
      <li>Eager to learn and adapt to new design challenges</li>
      <li>Available for campus placement opportunities</li>
    </ul>
  </div>

  <script>
    window.onload = function() {
      window.print();
    }
  </script>
</body>
</html>
  `;

  printWindow.document.write(resumeHTML);
  printWindow.document.close();
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030303]">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-300">Available for work</span>
              </motion.div>
              
              <motion.h1
                className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Creative<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Designer.
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl sm:text-2xl text-gray-400 font-light max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                I'm Ashwin Antony Jose. I craft intuitive digital experiences that solve real problems.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200 gap-2 font-medium px-8" onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}>
                View Work
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 gap-2 font-medium px-8" onClick={handleDownloadResume}>
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6 pt-8 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="https://www.linkedin.com/in/ashwin-antony-jose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:ashwinantonyjose28@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-[4/5] w-full max-w-md rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Ashwin Antony Jose"
                  className="w-full h-full object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 border-2 border-white/5 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}