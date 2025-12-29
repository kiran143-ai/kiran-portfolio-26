import Layout from "@/components/layout/Layout";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeading from "@/components/case-study/SectionHeading";
import CheckItem from "@/components/case-study/CheckItem";
import { getAdjacentStudies } from "@/lib/caseStudyData";

import ProblemStatement from "@/assets/C1-problemStatement.png";
import Solution from "@/assets/C2-Solution.png";
import Research from "@/assets/C3-Research.png";
import Journeymap from "@/assets/C4-Journeymap.png";
import Ideation from "@/assets/C5-Ideation.png";
import DesignSystem from "@/assets/C6-DesignSystem.png";
import Before from "@/assets/C7_before.png";
import After from "@/assets/C8-After.png";
import Responsive from "@/assets/C9-Responsive.png";

const HealthcareReports = () => {
  const { prev, next } = getAdjacentStudies("healthcare-reports");

  return (
    <Layout>

      {/* ================= HERO ================= */}
      

<section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Leading Health care <br /> Reports
              </h1>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span>8 months</span>
                <span>B2B</span>
                <span>US</span>
              </div>
            </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
              A comprehensive healthcare analytics platform designed to help
              hospitals and clinical teams unlock actionable insights from
              complex patient and operational data.  <br />  <br /> 

                 The dashboard enables faster decision-making by transforming
              fragmented healthcare reports into clear, visual, and real-time
              insights.
            </p>

            
           
            
          </div>
        </div>
      </section>

      

      {/* ================= PROBLEM ================= */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading>Problem Statement</SectionHeading>

            <div className="space-y-4 mt-6">
              <CheckItem>
                Healthcare data was highly fragmented across multiple systems,
                making report generation slow and error-prone.
              </CheckItem>
              <CheckItem>
                Physicians lacked quick access to critical metrics during
                diagnosis and treatment decisions.
              </CheckItem>
              <CheckItem>
                Existing tools relied heavily on tables, making trend analysis
                difficult.
              </CheckItem>
              <CheckItem>
                Complex filters increased cognitive load and onboarding time.
              </CheckItem>
              <CheckItem>
                No real-time visibility into report status or data freshness.
              </CheckItem>
            </div>
          </div>

          <img src={ProblemStatement} alt="Problem statement" className="rounded-xl" />
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img src={Solution} alt="Solution" className="rounded-xl" />

          <div>
            <SectionHeading>Project Solution</SectionHeading>

            <p className="text-muted-foreground mb-6 mt-4">
              The solution focused on simplifying data consumption while
              preserving analytical depth. We designed a flexible dashboard
              system that adapts to different clinical roles.
            </p>

            <div className="space-y-4">
              <CheckItem>
                Real-time dashboards with live data synchronization
              </CheckItem>
              <CheckItem>
                Smart filters that adapt to frequent user behavior
              </CheckItem>
              <CheckItem>
                Visual insights using charts, gauges, and trend indicators
              </CheckItem>
              <CheckItem>
                Modular widgets for quick report composition
              </CheckItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH ================= */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading>Research</SectionHeading>

          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-16">
            <div className="bg-card p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Stakeholder Interviews</h4>
              <p className="text-sm text-muted-foreground">
                Conducted interviews with physicians, nurses, and healthcare
                administrators to understand reporting pain points.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Competitive Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Evaluated leading healthcare analytics tools to identify gaps
                and best practices.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl">
              <h4 className="font-semibold mb-2">Usability Testing</h4>
              <p className="text-sm text-muted-foreground">
                Tested early prototypes with real users across multiple roles.
              </p>
            </div>
          </div>

          <img src={Research} alt="Research outputs" className="rounded-xl" />
        </div>
      </section>

      
      
{/* ================= JOURNEY ================= */}

 <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <SectionHeading>Created current User Journey Map based on research</SectionHeading>

            <p className="text-muted-foreground mb-6 mt-4">
              We mapped the end-to-end journey from login to report export,
            uncovering friction points in data discovery, filtering, and
            interpretation.
            </p>

            <div className="space-y-4">
              <CheckItem>
                Adding widgets through popup makes confuse the user to predict the dashboard view.
              </CheckItem>
              <CheckItem>
                User can’t add the multiple widgets at time
              </CheckItem>
              <CheckItem>
                There are no features for templates and theme while creating dashboard
              </CheckItem>
             
            </div>
          </div>
                   <img src={Journeymap} alt="User journey map" className="rounded-xl" />

        </div>
      </section>



      {/* ================= IDEATION ================= */}
    
       <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <img src={Ideation} alt="Ideation wireframes" className="rounded-xl" />

          <div>
            <SectionHeading>Ideation – Dashboard Builder Wireframes</SectionHeading>

            <p className="text-muted-foreground mb-6 mt-4">
              Multiple dashboard layouts were explored to balance flexibility
            with usability. The focus was on quick customization without
            overwhelming users.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DESIGN SYSTEM ================= */}
  


 <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <SectionHeading>Design System</SectionHeading>

            <p className="text-muted-foreground mb-6 mt-4">
              A scalable design system was built with healthcare-appropriate
            colors, accessible typography, and reusable components optimized
            for data-heavy interfaces.
            </p>
          </div>
          <img src={DesignSystem} alt="Design system" className="rounded-xl" />

        </div>
      </section>


      {/* ================= VISUAL ================= */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading>Visual Design</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <p className="font-semibold mb-4">Before</p>
              <img src={Before} alt="Before design" className="rounded-xl" />
            </div>

            <div>
              <p className="font-semibold mb-4">After</p>
              <img src={After} alt="After design" className="rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESPONSIVE ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading>Mobile Friendly & Scalable</SectionHeading>

            <ul className="space-y-3 text-muted-foreground mt-6">
              <li>• Responsive grid system across devices</li>
              <li>• Touch-friendly interactions for tablets</li>
              <li>• Optimized tables for small screens</li>
              <li>• Quick actions for frequent tasks</li>
            </ul>
          </div>

          <img src={Responsive} alt="Responsive screens" className="rounded-xl" />
        </div>
      </section>

      {/* ================= BUSINESS IMPACT ================= */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading>The Business Impact</SectionHeading>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="space-y-3">
              <CheckItem>50% reduction in report generation time</CheckItem>
              <CheckItem>Improved data accuracy and trust</CheckItem>
              <CheckItem>Higher adoption across clinical teams</CheckItem>
            </div>

            <div className="space-y-3">
              <CheckItem>Reduced onboarding and training effort</CheckItem>
              <CheckItem>Positive stakeholder feedback</CheckItem>
              <CheckItem>Scalable foundation for future features</CheckItem>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyNav
        prevStudy={prev ? { slug: prev.slug, title: prev.shortTitle } : undefined}
        nextStudy={next ? { slug: next.slug, title: next.shortTitle } : undefined}
      />

    </Layout>
  );
};

export default HealthcareReports;
