import { Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "../../assets/profile.png";
import { motion } from "motion/react";

const handleDownloadResume = () => {
  // Create a new window with the resume
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  // Get the resume HTML
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <motion.p
                className="text-indigo-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  textShadow: [
                    "0 0 0px rgba(79, 70, 229, 0)",
                    "0 0 20px rgba(79, 70, 229, 0.8)",
                    "0 0 30px rgba(79, 70, 229, 0.6)",
                    "0 0 20px rgba(79, 70, 229, 0.8)",
                    "0 0 0px rgba(79, 70, 229, 0)",
                  ],
                  scale: [1, 1.03, 1.05, 1.03, 1],
                }}
                transition={{
                  opacity: { duration: 0.7, delay: 0.2 },
                  y: { duration: 0.7, delay: 0.2 },
                  textShadow: {
                    repeat: Infinity,
                    duration: 1.5,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  },
                  scale: {
                    repeat: Infinity,
                    duration: 1.5,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  },
                }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Ashwin
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Antony
                </motion.span>{" "}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Jose
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-2xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                UI/UX Designer
              </motion.p>
            </div>
            
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              A passionate BTech student specializing in UI/UX design. I create beautiful,
              user-centered designs using Figma and bring ideas to life through intuitive
              interfaces. Looking for opportunities to contribute my design skills.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Button size="lg" className="gap-2" onClick={handleDownloadResume}>
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}>
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <a
                href="https://www.linkedin.com/in/ashwin-antony-jose-937279296"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ashwinantonyjose28@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl max-w-md w-full">
              <img
                src={profilePhoto}
                alt="Ashwin Antony Jose"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-indigo-200 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}