import Layout from "@/components/layout/Layout";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeading from "@/components/case-study/SectionHeading";
import CheckItem from "@/components/case-study/CheckItem";
import { getAdjacentStudies } from "@/lib/caseStudyData";

import Insurance1 from "@/assets/Insurance1.png";
import Insurance2 from "@/assets/Insurance2.png";
import Insurance3 from "@/assets/Insurance3.png";
import Insurance4 from "@/assets/Insurance4.png";
import Insurance5 from "@/assets/Insurance5.png";
import Insurance6 from "@/assets/Insurance6.png";
import Insurance7 from "@/assets/Insurance7.png";
import Insurance8 from "@/assets/Insurance8.png";
import Insurance9 from "@/assets/Insurance9.png";
import Insurance10 from "@/assets/Insurance10.png";

const InsuranceCompany = () => {
  const { prev, next } = getAdjacentStudies("insurance-company");

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Leading Insurance
              <br />
              Company
            </h1>

            <div className="flex gap-6 text-sm text-muted-foreground mb-6">
              <span>6 months</span>
              <span>B2B</span>
              <span>US</span>
              <span>Desktop</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Insurance Company is the nation’s largest mutual life insurance company
            and one of the largest life insurers in the world. The application
            empowers beneficiaries by simplifying policy management, streamlining
            claims processing, and delivering a seamless digital experience for
            managing beneficiary information.
          </p>
        </div>
      </section>

      {/* ================= PROBLEM STATEMENT ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={Insurance1} alt="Insurance Dashboard" className="rounded-xl shadow-lg" />

          <div>
            <SectionHeading>Problem Statement</SectionHeading>
            <div className="space-y-4">
              <CheckItem>Beneficiaries struggled to update information due to complex workflows</CheckItem>
              <CheckItem>Multi-step forms caused drop-offs during onboarding</CheckItem>
              <CheckItem>Legacy UI lacked accessibility compliance</CheckItem>
              <CheckItem>Limited visibility into claims status and updates</CheckItem>
              <CheckItem>Inconsistent user experience across platforms</CheckItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT SOLUTION ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading>Project Solution</SectionHeading>
            <div className="space-y-4">
              <CheckItem>Conducted UX audits across customer and internal applications</CheckItem>
              <CheckItem>Performed stakeholder and user interviews to identify pain points</CheckItem>
              <CheckItem>Redesigned beneficiary flows with intuitive UI patterns</CheckItem>
              <CheckItem>Implemented WCAG 2.1 AA accessibility standards</CheckItem>
              <CheckItem>Built a unified design system for cross-platform consistency</CheckItem>
            </div>
          </div>

          <img src={Insurance2} alt="Project Solution Screens" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= RESEARCH ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <img src={Insurance3} alt="Research Screens" className="rounded-xl shadow-lg" />

          <div>
            <SectionHeading>Research</SectionHeading>

            <h3 className="font-semibold mb-2">Stakeholder Interviews (13)</h3>
            <CheckItem>Captured pain points from internal and external stakeholders</CheckItem>
            <CheckItem>Identified usability gaps impacting task completion</CheckItem>
            <CheckItem>Aligned business goals with user needs</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">App Domains (6)</h3>
            <CheckItem>Understood high-level application landscape</CheckItem>
            <CheckItem>Deep dive into user flows and application functionality</CheckItem>
            <CheckItem>Identified user problems and usability issues</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">User Research</h3>
            <CheckItem>Summarized and compiled research findings</CheckItem>
            <CheckItem>Identified recurring user patterns</CheckItem>
            <CheckItem>
              Developed actionable solutions based on identified user pain points
            </CheckItem>
          </div>
        </div>
      </section>

      {/* ================= USER PERSONA 1 ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading>User Persona 1</SectionHeading>

            <h3 className="font-semibold mb-2">Landing Page</h3>
            <CheckItem>Users need to scroll to access tabs and accordion content</CheckItem>
            <CheckItem>Print view contains excessive white space</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Policy Details / Financial Summary</h3>
            <CheckItem>Inaccurate interest calculations for out-of-surrender policies</CheckItem>
            <CheckItem>Font sizes affect readability</CheckItem>
            <CheckItem>Accessibility issues identified</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Policy Details / Self Service Transaction</h3>
            <CheckItem>Three clicks required to view transaction details</CheckItem>
            <CheckItem>Save button not highlighted correctly in withdrawal flow</CheckItem>
            <CheckItem>Accessibility issues in transaction flows</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Policy Details / Related Parties</h3>
            <CheckItem>Misplaced buttons and unclear labels while adding beneficiaries</CheckItem>
            <CheckItem>“Related Parties” terminology causes confusion</CheckItem>
            <CheckItem>International address support needed (low priority)</CheckItem>
          </div>

          <img src={Insurance4} alt="Persona 1 Screens" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= USER PERSONA 2 ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <img src={Insurance5} alt="Persona 2 Screens" className="rounded-xl shadow-lg" />

          <div>
            <SectionHeading>User Persona 2</SectionHeading>

            <h3 className="font-semibold mb-2">Related Parties</h3>
            <CheckItem>Tab wording does not clearly indicate purpose</CheckItem>
            <CheckItem>Filter option is rarely used</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Statements</h3>
            <CheckItem>Filters needed for address, beneficiary, and 1099 statements</CheckItem>
            <CheckItem>Tabs lack visual highlighting for accessibility</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Landing Page</h3>
            <CheckItem>Accordions occupy excessive space</CheckItem>
            <CheckItem>Font sizes not accessible for users aged 65+</CheckItem>
            <CheckItem>Navigation accessibility issues identified</CheckItem>
          </div>
        </div>
      </section>

      {/* ================= ADD BENEFICIARY FLOW ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading>Typical Add Beneficiary Flow</SectionHeading>
            <CheckItem>
              Series of steps enabling users to add beneficiaries to their accounts
            </CheckItem>
            <CheckItem>
              Collects beneficiary details such as name, contact info, and relationship
            </CheckItem>
            <CheckItem>
              Ensures a seamless and intuitive experience for future benefit distribution
            </CheckItem>
          </div>

          <img src={Insurance6} alt="Add Beneficiary Flow" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= UNIFIED DESIGN SYSTEM ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <img src={Insurance7} alt="Design System" className="rounded-xl shadow-lg" />

          <div>
            <SectionHeading>Unified Design System</SectionHeading>
            <p className="text-muted-foreground mb-6">
              A design system establishes standardized components, patterns, and
              guidelines that ensure consistency, scalability, and accessibility.
            </p>

            <CheckItem>Design principles guiding overall philosophy</CheckItem>
            <CheckItem>Reusable UI components and patterns</CheckItem>
            <CheckItem>Typography and color guidelines</CheckItem>
            <CheckItem>Iconography and imagery standards</CheckItem>
            <CheckItem>Responsive grids and layouts</CheckItem>
            <CheckItem>Accessibility standards</CheckItem>
          </div>
        </div>
      </section>

      {/* ================= MOODBOARD ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading>Moodboard</SectionHeading>
            <p className="text-muted-foreground mb-6">
              A visual reference capturing the mood, tone, and aesthetic direction
              of the design through colors, imagery, and textures.
            </p>
          </div>

          <img src={Insurance8} alt="Moodboard" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= HIGH-FIDELITY MOCKUPS ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={Insurance9} alt="High-Fidelity Mockups" className="rounded-xl shadow-lg" />

          <div>
            <SectionHeading>High-Fidelity Mockups</SectionHeading>
            <CheckItem>Step-by-step wizard for adding beneficiaries</CheckItem>
            <CheckItem>Support for existing and new beneficiaries</CheckItem>
            <CheckItem>Color-coded allocation and percentage bars</CheckItem>
            <CheckItem>Confirmation popup for newly added beneficiaries</CheckItem>
          </div>
        </div>
      </section>

      {/* ================= RESPONSIVE DESIGN ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading>Responsive Design for Every Device</SectionHeading>
            <p className="text-muted-foreground mb-6">
              Responsive layouts adapt seamlessly across devices, ensuring a
              consistent and high-quality user experience.
            </p>
          </div>

          <img src={Insurance10} alt="Responsive Screens" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= BUSINESS IMPACT ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>The Business Impact</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CheckItem>40% reduction in beneficiary update time</CheckItem>
            <CheckItem>25% decrease in support tickets</CheckItem>
            <CheckItem>WCAG 2.1 AA compliance achieved</CheckItem>
            <CheckItem>Higher post-launch satisfaction scores</CheckItem>
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

export default InsuranceCompany;
