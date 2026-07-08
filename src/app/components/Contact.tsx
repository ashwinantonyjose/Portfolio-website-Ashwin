import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:ashwinantonyjose28@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert("Opening your email client to send the message. Thank you!");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashwinantonyjose28@gmail.com",
      href: "mailto:ashwinantonyjose28@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9778232241",
      href: "https://wa.me/919778232241",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Poomkavu Church, Alappuzha, Kerala, India",
      href: "https://maps.app.goo.gl/CCKeWsTWVnRGUP737",
    },
  ];

  return (
    <section id="contact" className="py-32 relative bg-[#030303] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Feel free to reach out for design opportunities, collaborations, or just to say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <Card
                    key={index}
                    className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl cursor-pointer group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/20">
                        <Icon className="w-7 h-7 text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                        <p className="text-white font-medium text-lg">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                );

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-8 md:p-10 bg-white/5 border-white/10 rounded-3xl backdrop-blur-sm">
              <h3 className="text-3xl font-semibold text-white mb-8">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 rounded-xl h-14 px-5 focus-visible:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 rounded-xl h-14 px-5 focus-visible:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 rounded-xl px-5 py-4 focus-visible:ring-indigo-500 resize-none"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2 rounded-xl bg-white text-black hover:bg-gray-200 h-14 text-lg font-medium">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}