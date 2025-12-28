import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { AlertTriangle } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.png";
import caseStudy2 from "@/assets/case-study-2.png";
import caseStudy3 from "@/assets/case-study-3.png";
import caseStudy4 from "@/assets/case-study-4.png";
import caseStudy5 from "@/assets/case-study-5.png";

const caseStudies = [
  {
    number: "01",
    title: "Leading Insurance Company",
    description: "Largest mutual life insurance company and one of the largest life insurance companies in the world.",
    image: caseStudy1,
    imagePosition: "left",
    slug: "insurance-company",
  },
  {
    number: "02",
    title: "SaaS UX Solutions",
    description: "Designing intuitive and scalable experiences across multiple SaaS platforms.",
    image: caseStudy2,
    imagePosition: "right",
    slug: "saas-ux-solutions",
  },
  {
    number: "03",
    title: "Leading Health care Reports",
    description: "Comprehensive web application for unlocking valuable insights within healthcare reports.",
    image: caseStudy3,
    imagePosition: "left",
    slug: "healthcare-reports",
  },
  {
    number: "04",
    title: "Employee Self Service",
    description: "ESS is mobile app that provide employees with access to their personal records and Payroll details.",
    image: caseStudy4,
    imagePosition: "right",
    slug: "employee-self-service",
  },
  {
    number: "05",
    title: "Kid Acts",
    description: "KidActs app is for engaging the kids with chores to build responsibility, self-reliance, teamwork, respect, strong work ethic and time management skills.",
    image: caseStudy5,
    imagePosition: "left",
    slug: "kid-acts",
  },
];

const CaseStudy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-start justify-between">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-2xl leading-tight">
              Designing Experiences,
              <br />
              Creating Impact
            </h1>
            <span className="quote-mark text-[80px] md:text-[120px] relative top-0 right-0">"</span>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="section-heading mb-4">Case Studies</h2>
          
          {/* Note */}
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 mb-12">
            <AlertTriangle size={18} className="text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Note:</span> Some project names and sensitive details have been hidden to maintain client confidentiality.
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.number}
                className="bg-card rounded-2xl overflow-hidden card-hover"
              >
                <div
                  className={`flex flex-col ${
                    study.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2 p-6 lg:p-8">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 p-6 lg:p-12">
                    <span className="text-4xl font-bold text-primary mb-4 block">
                      {study.number}
                    </span>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    <Link to={`/case-study/${study.slug}`} className="btn-outline inline-block">VIEW CASE STUDY</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
