import { Linkedin, Mail, Download, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "../../assets/ASHWIN PHOTO.jpeg";
import { motion } from "motion/react";

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
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                UI/UX Designer<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  & AI Developer.
                </span>
              </motion.h1>
              
              <motion.div
                className="text-xl sm:text-2xl text-gray-400 font-light max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                I'm <span className="glitch-wrapper mx-1 inline-block"><span className="glitch text-white font-black tracking-widest text-2xl sm:text-3xl" data-text="ASHWIN ANTONY JOSE">ASHWIN ANTONY JOSE</span></span>.<br className="hidden sm:block" /> I craft intuitive digital experiences that solve real problems.
              </motion.div>
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
              <a 
                href="/Ashwin_Antony_Jose_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm h-11 rounded-full border border-white/20 text-white hover:bg-white/10 gap-2 font-medium px-8 transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <a 
                href="https://wa.me/919778232241" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm h-11 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 gap-2 font-medium px-8 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Contact for work
              </a>
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
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.3 },
              scale: { duration: 0.8, delay: 0.3 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
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