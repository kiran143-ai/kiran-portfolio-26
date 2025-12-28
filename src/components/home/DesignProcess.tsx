import { Search, Lightbulb, Layout, Palette, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Understanding users & Business needs",
    color: "border-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Lightbulb,
    title: "Content Strategy",
    description: "Building structure of content",
    color: "border-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Layout,
    title: "UX",
    description: "Defining user flows & patterns",
    color: "border-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Palette,
    title: "UI",
    description: "Applying the brand & visual impact",
    color: "border-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Rocket,
    title: "Implement & Deploy",
    description: "",
    color: "border-primary",
    bgColor: "bg-primary/10",
  },
];

const DesignProcess = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16">
          Crafting Human-Centered Designs with Design Thinking
        </h2>

        {/* Process Labels */}
        <div className="hidden lg:flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-24 h-0.5 bg-primary"></div>
            <span className="text-xs font-medium tracking-wider text-primary border border-primary px-3 py-1 rounded-full">
              EMPATHIZE & DEFINE
            </span>
            <div className="w-24 h-0.5 bg-primary"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-24 h-0.5 bg-primary"></div>
            <span className="text-xs font-medium tracking-wider text-primary border border-primary px-3 py-1 rounded-full">
              IDEATE, PROTOTYPE & TEST
            </span>
            <div className="w-24 h-0.5 bg-primary"></div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`process-circle border-2 ${step.color} ${step.bgColor} mb-4`}
                >
                  <step.icon size={28} className="text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                {step.description && (
                  <p className="text-sm text-muted-foreground max-w-[140px]">
                    {step.description}
                  </p>
                )}
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-muted to-muted-foreground/50 mx-2 mt-[-60px]">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-muted-foreground/50 float-right mt-[-3px]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
