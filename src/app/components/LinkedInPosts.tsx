import { ExternalLink, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function LinkedInPosts() {
  const posts = [
    {
      title: "UI/UX Design & Web Design Insights",
      description:
        "Sharing my thoughts and experience on creating user-centered designs and best practices in web design.",
      link: "https://www.linkedin.com/posts/ashwin-antony-jose-937279296_uiuxdesign-webdesign-userexperience-activity-7375829600871985152-4DX_?utm_medium=ios_app&rcm=ACoAAEeWMPsBiNk2jPcQV7W6m6f6indrIBdPBf0&utm_source=social_share_send&utm_campaign=copy_link",
    },
    {
      title: "UI/UX & UI Design in Figma",
      description:
        "Exploring the powerful features of Figma and how it transforms the design workflow for modern UI/UX projects.",
      link: "https://www.linkedin.com/posts/ashwin-antony-jose-937279296_uiux-uidesign-figma-ugcPost-7396081143973974016-QsW2?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAAEeWMPsBiNk2jPcQV7W6m6f6indrIBdPBf0&utm_campaign=copy_link",
    },
    {
      title: "UI/UX & Figma Designer Journey",
      description:
        "My journey as a UI/UX designer, lessons learned, and insights into creating impactful digital experiences.",
      link: "https://www.linkedin.com/posts/ashwin-antony-jose-937279296_uiux-figma-designer-activity-7375215019061440513-Dwef?utm_medium=ios_app&rcm=ACoAAEeWMPsBiNk2jPcQV7W6m6f6indrIBdPBf0&utm_source=social_share_send&utm_campaign=copy_link",
    },
  ];

  return (
    <section id="linkedin" className="py-32 relative bg-[#030303]">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Insights</h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Check out my latest design insights and updates on LinkedIn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-white/5 border-white/10 hover:bg-white/[0.07] transition-all duration-300 rounded-3xl h-full flex flex-col backdrop-blur-sm group hover:-translate-y-2">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                  <Linkedin className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed flex-grow">{post.description}</p>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 w-full rounded-xl border-white/20 text-white hover:bg-white/10 hover:text-white"
                  onClick={() => window.open(post.link, "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Post
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
