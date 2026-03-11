import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Ashwin Antony Jose
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/ashwin-antony-jose-937279296"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ashwinantonyjose28@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}