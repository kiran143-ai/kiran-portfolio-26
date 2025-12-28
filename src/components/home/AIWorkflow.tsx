import { Flame, Lightbulb, Layers, FileText, Settings } from "lucide-react";

const workflowSteps = [
  {
    icon: Flame,
    number: "01",
    title: "AI Research",
    description: "AI synthesizes user interviews, identifies patterns, and generates quick personas.",
    color: "text-red-500",
    bgColor: "bg-red-500/20",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "AI Ideation",
    description: "Generate UX flows, journey alternatives, and concept directions instantly.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
  },
  {
    icon: Layers,
    number: "03",
    title: "AI UI Design",
    description: "AI assists in wireframing, layout suggestions, and smart UI variations.",
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    icon: FileText,
    number: "04",
    title: "AI Content",
    description: "Craft precise UX writing, tooltips, and developer documentation.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
  },
  {
    icon: Settings,
    number: "05",
    title: "AI Automation",
    description: "Automates layer naming, style consistency, and repetitive tasks.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/20",
  },
];

const AIWorkflow = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-12">AI-Powered Design Workflow</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.number}
              className="workflow-card group"
            >
              <div
                className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-4`}
              >
                <step.icon size={24} className={step.color} />
              </div>
              <span className={`text-3xl font-bold ${step.color} block mb-3`}>
                {step.number}
              </span>
              <h3 className="font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWorkflow;
