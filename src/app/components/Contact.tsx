import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Feel free to reach out for design opportunities, collaborations, or just to say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <Card
                  key={index}
                  className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{info.label}</p>
                      <p className="text-gray-900 font-medium">{info.value}</p>
                    </div>
                  </div>
                </Card>
              );

              return info.href ? (
                <a key={index} href={info.href}>
                  {content}
                </a>
              ) : (
                content
              );
            })}
          </div>

          <Card className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}