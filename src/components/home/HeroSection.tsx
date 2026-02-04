import { useEffect, useRef } from "react";
import heroImage from "@/assets/designer-hero.png";
import LightRays from "@/effects/LightRays";


const title = "Product Designer";

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
  <section className="relative py-12 md:py-20 overflow-hidden">
    {/* 🌈 LIGHT RAYS BACKGROUND (does NOT affect layout) */}
    <div className="absolute inset-0 pointer-events-none z-0">
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
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
    </div>

    {/* 🧱 HERO CONTENT */}
    <div className="relative z-10 container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 flex flex-wrap">
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

          <p className="text-primary text-lg md:text-xl mb-6 animate-fade-up">
            15+ Years Experience – Crafting Smarter Experiences with AI Driven Design
          </p>

          <p className="text-muted-foreground leading-relaxed max-w-lg animate-fade-up delay-200">
            Passionate about crafting meaningful and user-centric experiences.
            I blend empathy, creativity, and collaboration to solve complex
            problems.{" "}
            <span className="text-foreground font-medium">
              AI tools help me design faster, smarter, and more personalized experiences.
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
              className="w-80 md:w-96 lg:w-[32rem] xl:w-[36rem] rounded-2xl object-cover transition-transform duration-300 ease-out will-change-transform"
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
