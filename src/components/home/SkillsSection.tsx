const skills = [
  {
    title: "Research and Analysis",
    items: [
      "Collaboration, Design Thinking, Problem Solving, User Research, Usability Testing, Persona Creation, Journey Mapping, IA, Sitemaps",
    ],
  },
  {
    title: "Design & Technical",
    items: [
      "Visual Design, Interaction Design, Design System, Wireframing, Flow Designs, Typography, Color Theory, Iconography, Iterate Quickly, Figma, Miro, Adobe Suite, HTML/CSS",
    ],
  },
  {
    title: "AI Tools I Actively Use",
    items: [
      "ChatGPT, Gemini, Claude, Replit, Lovable, magicpatterns, Bolt, Midjourney, Figma AI, Uizard, Upilot",
    ],
  },
];

const quote = `"In product design, the design thinking process serves as a dynamic framework that fosters empathy, encourages creativity, and iteratively refines solutions to address user needs effectively."`;

const SkillsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.title}>
              <h3 className="font-semibold text-foreground mb-4 text-lg">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.items.join(", ")}
              </p>
            </div>
          ))}

          <div className="bg-card/50 rounded-xl p-6 border-l-4 border-primary">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              {quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
