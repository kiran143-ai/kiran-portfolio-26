import Layout from "@/components/layout/Layout";
import { Mail, Linkedin } from "lucide-react";
import aboutAvatar from "@/assets/about-avatar.png";
import companyTrianz from "@/assets/company-trianz.png";
import companyValuelabs from "@/assets/company-valuelabs.png";
import companyEons from "@/assets/company-eons.png";

const experiences = [
  {
    role: "Product Designer - 1",
    company: "Trianz",
    period: "2017 - Present",
    logo: companyTrianz,
    responsibilities: [
      "Work closely with cross-functional teams, including product managers, engineers, marketers, and researchers, to ensure alignment and collaboration throughout the product development process.",
      "Conduct user research to understand user needs, behaviors, and pain points.",
      "Use various research methods such as interviews, surveys, and usability testing to gather insights.",
      "Define design strategies based on user research findings, business goals, and market trends.",
      "Collaborate with product managers, engineers, and other stakeholders to align design strategies with product objectives.",
      "Create personas, empathy maps and user journey maps to find the insights/pain points.",
      "Create user flows, IA, sitemaps and wireframes to visualize and communicate design concepts.",
      "Create Design system to make the visual designs consistency, efficiency, scalability, collaboration, accessibility, documentation, and maintainability.",
      "Apply design principles and best practices to create visually appealing and engaging user interfaces.",
      "Collaborate with developers to ensure design specifications are implemented accurately.",
    ],
  },
  {
    role: "Sr UI/UX Designer",
    company: "ValueLabs",
    period: "2009 - 2017",
    logo: companyValuelabs,
    responsibilities: [
      "Design high-fidelity mockups, wireframes, and prototypes",
      "Create visually engaging and aesthetically pleasing user interface designs that align with the overall brand identity and project requirements.",
      "Design responsive user interfaces that adapt seamlessly to different screen sizes, resolutions, and device orientations.",
    ],
  },
  {
    role: "Web Designer",
    company: "Eons India Private LTD",
    period: "2008 - 2009",
    logo: companyEons,
    responsibilities: [],
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              I'm passionate about solving customer problems by combining thoughtful research, clever technology and beautiful design — and love working with businesses who believe that design can change the world.
            </p>
            <div className="flex justify-center lg:justify-end">
              <img
                src={aboutAvatar}
                alt="Kiran Yelligeti"
                className="w-48 md:w-64 h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-12">About</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12">
                  {/* Role Label */}
                  <div className="md:w-[180px] flex-shrink-0">
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.role}
                    </span>
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-[197px] w-2 h-2 rounded-full bg-primary"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:pl-12">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-lg object-contain bg-card p-2"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </div>

                    {exp.responsibilities.length > 0 && (
                      <ul className="space-y-3">
                        {exp.responsibilities.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                          >
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-8">Let's Talk</h2>

          <div className="bg-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <p className="text-foreground text-lg md:text-xl mb-8">
              I'm always interested in hearing about opportunities,
              <br />
              lead design roles and speaking engagements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kiran.yelligeti@gmail.com"
                className="btn-outline flex items-center gap-2"
              >
                <Mail size={16} />
                kiran.yelligeti@gmail.com
              </a>
             <a
  href="https://www.linkedin.com/in/kiranyeligeti"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary flex items-center gap-2"
>
  <Linkedin size={16} />
  Chat on LinkedIn
</a>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
