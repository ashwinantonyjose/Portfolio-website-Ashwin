import { Mail, Phone, Linkedin } from "lucide-react";

export function Resume() {
  return (
    <div className="bg-white max-w-[210mm] mx-auto p-8 shadow-lg text-gray-700" id="resume-content">
      <div className="text-center border-b-2 border-indigo-600 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Ashwin Antony Jose</h1>
        <p className="text-xl text-indigo-600 font-semibold mb-4">UI/UX Designer and AI-Assisted Web Developer</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center gap-1"><Phone className="w-4 h-4" />+91 9778232241</span>
          <span className="flex items-center gap-1"><Mail className="w-4 h-4" />ashwinantonyjose28@gmail.com</span>
          <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" />LinkedIn</span>
          <span>GitHub</span>
          <span>Portfolio</span>
        </div>
      </div>

      <ResumeSection title="Professional Summary">
        <p>UI/UX Designer and AI-Assisted Web Developer focused on Figma, responsive interface design, rapid prototyping, and AI-powered development workflows. Skilled in turning ideas into intuitive digital experiences, high-fidelity prototypes, and functional web interfaces.</p>
      </ResumeSection>

      <ResumeSection title="Experience">
        <ResumeEntry title="UI/UX Design Intern (2 Months)" meta="June 2024 and 2026">
          <p>Techgentsia Software Technologies Pvt. Ltd. | Alappuzha, Kerala</p>
          <ResumeList items={["Designed user-centered interfaces, wireframes, and high-fidelity prototypes in Figma.", "Applied responsive design, visual hierarchy, usability, and design consistency principles."]} />
        </ResumeEntry>
        <ResumeEntry title="Freelance UI/UX Designer & AI-Assisted Web Developer" meta="2024-Present">
          <p>Self-Employed | Remote</p>
          <ResumeList items={["Designed responsive websites, mobile interfaces, landing pages, dashboards, user flows, and reusable UI systems.", "Developed responsive websites using HTML, CSS, JavaScript, and AI-powered development tools."]} />
        </ResumeEntry>
      </ResumeSection>

      <ResumeSection title="Education">
        <ResumeEntry title="Carmel College of Engineering and Technology" meta="2023-Expected 2027">
          <p>B.Tech in Computer Science and Engineering</p>
          <p>Alappuzha, Kerala</p>
        </ResumeEntry>
      </ResumeSection>

      <ResumeSection title="Selected Projects">
        <ResumeEntry title="Food Delivery Mobile App UI" meta="Figma, UI/UX Design">
          <p>Designed end-to-end ordering flows, wireframes, high-fidelity screens, and interactive prototypes.</p>
        </ResumeEntry>
        <ResumeEntry title="Trip Map Mobile App UI" meta="Figma, UI/UX Design">
          <p>Designed a mobile-first travel planning interface focused on route discovery, trip planning, and clear information architecture.</p>
        </ResumeEntry>
      </ResumeSection>

      <ResumeSection title="Leadership & Achievements">
        <ResumeList items={["UI/UX & Figma Workshop Facilitator, Coding Club - CCET: Conducted a hands-on workshop for 60 students in September 2026.", "Design Team Lead - College Magazine: Led visual direction, publication layouts, creative assets, and design coordination in 2026.", "Design Team Lead - TEDx CCET: Led branding, posters, stage visuals, social media creatives, and visual identity from 2024-2026.", "1st Place - IEEE Website Design Competition (2025): Designed a modern, user-centered website interface in Figma."]} />
      </ResumeSection>

      <ResumeSection title="Technical Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkillGroup title="UI/UX & Product Design" text="Figma, Wireframing, High-Fidelity Prototyping, User Flows, Responsive Design, Information Architecture" />
          <SkillGroup title="Design Systems" text="Auto Layout, Component Design, Interactive Prototypes, Visual Hierarchy, Reusable UI Components" />
          <SkillGroup title="AI & Prompt Engineering" text="Generative AI, LLM-Based Prototyping, Context Engineering, AI Coding Workflows, UI Generation" />
          <SkillGroup title="Tools" text="VS Code, GitHub, Netlify, Render, Supabase, MongoDB" />
        </div>
      </ResumeSection>

      <ResumeSection title="Certifications">
        <p>Google Cloud - Introduction to Generative AI | IBM - Creative & Critical Thinking | Infosys - Basics of Python | KBA - Blockchain Foundation | NPTEL - Certification</p>
      </ResumeSection>
    </div>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2 mb-3">{title}</h2>
      {children}
    </section>
  );
}

function ResumeEntry({ title, meta, children }: { title: string; meta: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm whitespace-nowrap">{meta}</p>
      </div>
      {children}
    </div>
  );
}

function ResumeList({ items }: { items: string[] }) {
  return <ul className="list-disc list-inside mt-2 space-y-1">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function SkillGroup({ title, text }: { title: string; text: string }) {
  return <div><h3 className="font-semibold text-gray-900 mb-2">{title}</h3><p>{text}</p></div>;
}

export function downloadResume() {
  window.print();
}
