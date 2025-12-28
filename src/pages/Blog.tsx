import Layout from "@/components/layout/Layout";
import designerHero from "@/assets/designer-hero.png";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";
import blog4 from "@/assets/blog-4.png";
import blog5 from "@/assets/blog-5.png";
import blog6 from "@/assets/blog-6.png";
import blog7 from "@/assets/blog-7.png";
import { url } from "inspector";

const blogPosts = [
  {
    id: 1,
    category: "UX, Accessability",
    title: "Creating Inclusive Experiences:",
    subtitle: "A Deep Dive into Accessibility in Product Design",
    description: "How accessibility helpful for people and beneficial for business in product design?",
    image: blog1,
    author: "Kiran Yelligeti",
    date: "21 Jan, 2022",
    url:"https://uxplanet.org/creating-inclusive-experiences-a-deep-dive-into-accessibility-in-product-design-5fe48edac064",
  },
  {
    id: 2,
    category: "UX, User Joureney Maps",
    title: "Navigating Success:",
    subtitle: "A Deep Dive into User Journey Maps",
    description: "In this article you are going to know below points on User Journey Map.",
    image: blog2,
    author: "Kiran Yelligeti",
    date: "10 Jan, 2024",
    url:"https://uxplanet.org/navigating-success-a-deep-dive-into-user-journey-maps-9931a9dc2d90",
  },
  {
    id: 3,
    category: "UX, Case study",
    title: "UI/UX Case study and Portfolio of THE RIDER mobile App",
    subtitle: "",
    description: "THE RIDER where user take the bike rent.",
    image: blog3,
    author: "Kiran Yelligeti",
    date: "16 Jan, 2024",
    url:"https://uxplanet.org/ui-ux-case-study-and-portfolio-of-the-rider-mobile-app-eb352286ec2a",
  },
  {
    id: 4,
    category: "UX, Research",
    title: "Case study of Employee Self Services Mobile App",
    subtitle: "",
    description: "(ESS) is mobile app that provide employees with access to their personal records and Payroll details. ESS features include allowing...",
    image: blog4,
    author: "Kiran Yelligeti",
    date: "10 Sep, 2018",
    url:"https://uxplanet.org/case-study-of-employee-self-services-mobile-app-19c752e05c15",
  },
  {
    id: 5,
    category: "userflows, product design",
    title: "Don't go deeply. It could be in LOVE either in PRODUCT DESIGN",
    subtitle: "",
    description: "90% deep historical love stories had tragic end",
    image: blog5,
    author: "Kiran Yelligeti",
    date: "08 Aug, 2018",
    url:"https://uxplanet.org/dont-go-deeply-it-could-be-in-love-either-in-product-design-79f2a00bf9b4",
  },
  {
    id: 6,
    category: "UX Tweaks",
    title: "Tiny Tweaks are Massive Impact in UI/UX",
    subtitle: "",
    description: "User-Friendly product means not changing entire flow. We have to discover the pain points of user by doing user research and usability...",
    image: blog6,
    author: "Kiran Yelligeti",
    date: "30 Jul, 2018",
    url:"https://uxplanet.org/tiny-tweaks-are-massive-impact-in-ui-ux-24ce5f2ca74c",
  },
  {
    id: 6,
    category: "Design",
    title: "The Only 5 Exercises You Need to Know to Get in UI/UX Design in great shape",
    subtitle: "",
    description: "Walk with Confident",
    image: blog7,
    author: "Kiran Yelligeti",
    date: "30 Jul, 2018",
    url:"https://uxplanet.org/1-walk-with-confident-4c7cf834e33e",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-start justify-between">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-3xl leading-tight">
              Design Diaries:
              <br />
              Crafting User Experiences
            </h1>
            <span className="quote-mark text-[80px] md:text-[120px] relative top-0 right-0">"</span>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="section-heading mb-2">Latest Blog Posts in Medium</h2>
              <p className="text-muted-foreground">Building and Scaling Ideas</p>
            </div>
                <a
  href="https://kiran-yelligeti.medium.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-outline inline-flex items-center justify-center"> VIEW ALL POSTS</a>


 

          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogPosts.map((post) => (
    <a
      key={post.id}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="bg-card rounded-xl overflow-hidden card-hover h-full">
        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-primary text-sm font-medium">
            {post.category}
          </span>

          <h3 className="text-lg font-semibold text-foreground mt-2 mb-1 line-clamp-2 group-hover:text-primary transition">
            {post.title}
          </h3>

          {post.subtitle && (
            <p className="text-foreground text-sm font-medium mb-2">
              {post.subtitle}
            </p>
          )}

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src={designerHero}
              alt={post.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-foreground text-sm font-medium">
                {post.author}
              </p>
              <p className="text-muted-foreground text-xs">{post.date}</p>
            </div>
          </div>

          {/* CTA */}
          <p className="mt-4 text-sm font-medium text-primary">
            Read full article →
          </p>
        </div>
      </article>
    </a>
  ))}
</div>

        </div>
      </section>
    </Layout>
  );
};

export default Blog;
