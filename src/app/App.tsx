import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { LinkedInPosts } from "./components/LinkedInPosts";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="dark bg-[#030303] text-white min-h-screen font-['Outfit'] antialiased selection:bg-indigo-500/30">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LinkedInPosts />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}