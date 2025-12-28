import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialAvatar from "@/assets/testimonial-avatar.png";
import naresh from "@/assets/naresh.png";
import Jyo from "@/assets/jyo.png";
import Raj from "@/assets/raj-kumar.png";


const testimonials = [
  {
    quote: `I was Kiran's direct manager for almost three years. In that time I saw an already great Product Designer (UX/UI/Research) get even better. Kiran has developed a keen leadership style that allowed him to run projects that were both for internal stakeholders as well as external clients. His knack for researching clients and always being aware of the latest technologies, helped to put our entire team in a great position for client, and project, success. Kiran is also one of the easiest people to work with, and I would hire him again in second. The experience and impact he brings would add value to any company and any team.`,
    author: "Brett Polonsky",
    role: "Head of Digital Experience Studio at Trianz (US)",
    avatar: testimonialAvatar,
  },
  {
    quote: `I thoroughly enjoyed my time working with Kiran and came to know him as a truly valuable asset to our team, He is honest, dependable, and incredibly hardworking - Beyond that, he is an impressive problem solver who is able to address complex issues strategically and confidently.`,

    author: "Naresh Kumar Ch",
    role: "Product Designer at Bupa (UK)",
    avatar: naresh,
  },
  {
    quote: `I had the privilege of working with Kiran Yelegeti at ValueLabs, where he excelled as the lead UX designer. Kiran’s creativity, attention to detail, and user-first approach consistently elevated the quality of our projects. He is a talented professional and a pleasure to work with.`,


    author: "Jyothsna Kuchimanchi",
    role: "Senior Director at UnitedHealth Group",

    avatar: Jyo,
  },
  {
    quote: `Kiran is so efficient in his design decisions and problem-solving skills. He has an eye for detail and a knack for design aesthetics. He is a continuous explorer in the design domain. I was fortunate to work with him in the same team at Trianz Holdings, Hyderabad. He is an absolute asset for any design team expecting excellent design outcomes.`,

    author: "Raj Kumar Bejanki",
    role: "Technical Superintendent at Department Of Design",
    avatar: Raj,
  },

];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-4">Leadership Endorsements</h2>
        <p className="text-muted-foreground mb-12 max-w-4xl">
          In my career as a Product Designer, I have been fortunate to receive numerous endorsements from directors, & senior leadership, which have significantly impacted my professional growth and credibility in the field. These testimonials highlight my dedication, skills, and the positive influence I have had on various projects and teams.
        </p>

        <div className="relative bg-card rounded-2xl p-8 md:p-12">
          {/* Quote Mark */}
          <span className="quote-mark top-4 left-8">"</span>

          <div className="relative z-10 pt-16">
            <p className="text-foreground leading-relaxed text-lg md:text-xl mb-8 max-w-4xl mx-auto text-center">
              {testimonials[currentIndex].quote}
            </p>

            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h4 className="font-semibold text-foreground">
                {testimonials[currentIndex].author}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-8 bottom-8 flex gap-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
