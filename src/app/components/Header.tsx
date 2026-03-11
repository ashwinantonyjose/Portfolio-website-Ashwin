import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Ashwin Antony Jose</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("linkedin")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn Posts
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("linkedin")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left"
            >
              LinkedIn Posts
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}