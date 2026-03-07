import { useEffect, useRef } from "react";
import heroImage from "@/assets/designer-hero.png";
import LightRays from "@/effects/LightRays";


const title = "Product Design Leader";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      image.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    };

    const reset = () => {
      image.style.transform = "translate(0,0) scale(1)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

 return (
  <section className="relative py-12 md:py-20 overflow-hidden min-h-[600px]">

    {/* LIGHT RAYS BACKGROUND */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
        className="custom-rays"
      />
    </div>

    {/* HERO CONTENT */}
    <div className="relative z-10 container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-6xl font-bold mb-4 flex flex-wrap">
            {title.split("").map((char, i) => (
              <span
                key={i}
                className="hero-letter"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* 
<p className="text-primary text-lg md:text-xl mb-6">
  15+ Years Experience – Crafting Smarter Experiences with AI Driven Design. Scalable Systems & Dev-Ready UI.
</p> 
*/}

<p className="text-primary text-lg md:text-ml mb-6">
   UX Strategy | Design Systems | AI-Enabled Workflows |  Dev-Ready UI
</p>

<p className="text-muted-foreground leading-relaxed max-w-3xl">
  I lead product design initiatives that balance user experience, business goals, and technical feasibility. 
  My work focuses on building accessible, reusable UI systems that scale across products.
  <br /><br />
  With practical front-end fluency in HTML, CSS, Tailwind, JavaScript, and React, I collaborate deeply with
  engineering teams to translate design systems into reliable, production-ready components.
  <br /><br />
  <span className="text-foreground font-medium">
    I strategically integrate AI into my workflow to accelerate research, exploration, and iteration while ensuring product thinking and user value remain human-led.
  </span>
</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              ref={imageRef}
              src={heroImage}
              alt="Product Designer"
              className="w-80 md:w-96 lg:w-[32rem] xl:w-[36rem] rounded-2xl object-cover"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl -z-10 blur-xl" />
          </div>
        </div>

      </div>
    </div>

  </section>
);


};

export default HeroSection;
