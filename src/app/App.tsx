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
    <div className="min-h-screen bg-white">
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