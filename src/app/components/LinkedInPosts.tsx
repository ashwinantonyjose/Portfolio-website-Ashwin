import { ExternalLink, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

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
    <section id="linkedin" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">LinkedIn Posts</h2>
          <p className="text-lg text-gray-600">
            Check out my latest design insights and updates on LinkedIn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{post.description}</p>
              <Button
                size="sm"
                variant="outline"
                className="gap-2 w-full"
                onClick={() => window.open(post.link, "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                View Post
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
