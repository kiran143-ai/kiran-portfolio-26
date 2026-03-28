import Layout from "@/components/layout/Layout";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeading from "@/components/case-study/SectionHeading";
import CheckItem from "@/components/case-study/CheckItem";
import { getAdjacentStudies } from "@/lib/caseStudyData";

import Insurance1 from "@/assets/Insurance1.png";
import Insurance2 from "@/assets/Insurance2.png";
import InsuranceExistingFlow from "@/assets/Existing-Add-BeneficiaryFlow.png";
import Insurance3 from "@/assets/Insurance3.png";
import Insurance4 from "@/assets/Insurance4.png";
import Insurance5 from "@/assets/Insurance5.png";
import Insurance6 from "@/assets/Casestudy_Insurance_Mainflow.png";
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
            One of the nation's largest mutual life insurance companies trusted us to rethink
            how their customers manage policies and beneficiaries online. The goal was simple:
            make it easy for real people to update their information, track their claims, and
            feel confident every step of the way.
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
              <CheckItem>Updating beneficiary information felt like navigating a maze — too many steps, too much confusion</CheckItem>
              <CheckItem>Long multi-step forms were causing users to give up halfway through</CheckItem>
              <CheckItem>The existing UI was not accessible to older users or those with disabilities</CheckItem>
              <CheckItem>Users had no way to track where their claim stood or what was happening next</CheckItem>
              <CheckItem>The experience felt completely different depending on which device or browser you used</CheckItem>
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
              <CheckItem>Ran a full UX audit across both customer-facing and internal tools to find where things broke down</CheckItem>
              <CheckItem>Spoke directly with stakeholders and real users to understand what was frustrating them day to day</CheckItem>
              <CheckItem>Rebuilt the beneficiary management flow from scratch with clarity and simplicity in mind</CheckItem>
              <CheckItem>Brought the entire experience up to WCAG 2.1 AA accessibility standards</CheckItem>
              <CheckItem>Created a shared design system so every screen felt like it belonged to the same product</CheckItem>
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
            <CheckItem>Heard directly from internal teams and external partners about where the product was falling short</CheckItem>
            <CheckItem>Pinpointed the exact moments where users were getting stuck or dropping off</CheckItem>
            <CheckItem>Made sure the design direction aligned with what the business actually needed</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">App Domains (6)</h3>
            <CheckItem>Mapped out the full landscape of the application to understand how everything connected</CheckItem>
            <CheckItem>Dug deep into each user flow to see what was working and what was not</CheckItem>
            <CheckItem>Surfaced recurring problems that users were running into across different parts of the app</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">User Research</h3>
            <CheckItem>Pulled together all findings into a clear picture of what users actually needed</CheckItem>
            <CheckItem>Found patterns in how different types of users were approaching the same tasks</CheckItem>
            <CheckItem>Turned those insights into concrete design decisions that addressed real frustrations</CheckItem>
          </div>
        </div>
      </section>

      {/* ================= USER PERSONA 1 ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading>User Persona 1</SectionHeading>

            <h3 className="font-semibold mb-2">Landing Page</h3>
            <CheckItem>Users had to scroll too far down just to reach the tabs and key content</CheckItem>
            <CheckItem>When printing, the page was mostly empty white space with little useful information</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Policy Details / Financial Summary</h3>
            <CheckItem>Interest calculations were showing incorrect numbers for out-of-surrender policies</CheckItem>
            <CheckItem>Text was too small for comfortable reading, especially on larger screens</CheckItem>
            <CheckItem>Several elements failed basic accessibility checks for color and focus states</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Policy Details / Self Service Transaction</h3>
            <CheckItem>It took three separate clicks just to view a single transaction detail</CheckItem>
            <CheckItem>The Save button during withdrawals was easy to miss — it blended into the background</CheckItem>
            <CheckItem>Users relying on keyboard navigation ran into dead ends throughout the flow</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Policy Details / Related Parties</h3>
            <CheckItem>Buttons were placed in unexpected spots and labels did not match what users expected</CheckItem>
            <CheckItem>Calling it "Related Parties" instead of "Beneficiaries" confused almost everyone</CheckItem>
            <CheckItem>Users with international addresses had no way to enter their information correctly</CheckItem>
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
            <CheckItem>Tab labels gave no real hint about what was inside — users had to guess</CheckItem>
            <CheckItem>The filter option was barely used because most users did not even notice it was there</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Statements</h3>
            <CheckItem>There was no way to filter statements by address, beneficiary, or tax documents</CheckItem>
            <CheckItem>Active tabs looked the same as inactive ones — impossible to tell where you were</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Landing Page</h3>
            <CheckItem>Accordions took up the entire screen even when collapsed, leaving almost no room for actual content</CheckItem>
            <CheckItem>Text was far too small for the primary audience — many users are 65 or older</CheckItem>
            <CheckItem>Keyboard and screen reader users hit multiple dead ends trying to navigate the page</CheckItem>
          </div>
        </div>
      </section>

      {/* ================= EXISTING BENEFICIARY FLOW PAIN POINTS ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading>Existing Beneficiary Flow: Pain Points</SectionHeading>

            <h3 className="font-semibold mb-2">Manage Beneficiaries (Screen 1)</h3>
            <CheckItem>Users had to click into a tab just to see who their current beneficiaries were</CheckItem>
            <CheckItem>The Added and Removed counters were so small that users often missed changes they had made</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Add a Primary Beneficiary (Screen 2)</h3>
            <CheckItem>Every action started with a dropdown selection that added an unnecessary extra step</CheckItem>
            <CheckItem>First-time users had no idea what "Beneficiary Type" meant or which option to pick</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Personal Information Form (Screen 3)</h3>
            <CheckItem>The entire form appeared all at once — long, overwhelming, and easy to get lost in</CheckItem>
            <CheckItem>If users navigated away by mistake, all their progress was gone with no warning</CheckItem>
            <CheckItem>Required fields looked exactly the same as optional ones — no visual difference at all</CheckItem>

            <h3 className="font-semibold mt-6 mb-2">Set Your Allocations (Screen 4)</h3>
            <CheckItem>The allocation slider was tiny and nearly impossible to drag to an exact percentage</CheckItem>
            <CheckItem>Showing old and new allocations side by side created more confusion than clarity</CheckItem>
            <CheckItem>There was no final review or confirmation before the changes were submitted</CheckItem>
          </div>

          <img src={InsuranceExistingFlow} alt="Existing Beneficiary Flow Screens" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= ADD BENEFICIARY FLOW ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <SectionHeading>Redesigned Add Beneficiary Flow</SectionHeading>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
              <CheckItem>A clear step-by-step flow that guides users through adding a beneficiary without any guesswork</CheckItem>
              <CheckItem>Works for both first-time additions and updating existing beneficiaries</CheckItem>
              <CheckItem>Collects only what is needed — name, contact details, and relationship to the owner</CheckItem>
              <CheckItem>First beneficiary automatically gets 100% allocation, with a smart slider for any additions after that</CheckItem>
              <CheckItem>Every step feels intentional, with no dead ends and no lost progress</CheckItem>
              <CheckItem>Inline validation, helpful hints, and a sticky action bar keep users on track throughout</CheckItem>
            </div>
          </div>
          <img src={Insurance6} alt="Redesigned Add Beneficiary Flow" className="rounded-xl shadow-lg w-full" />
        </div>
      </section>

      {/* ================= UNIFIED DESIGN SYSTEM ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <img src={Insurance7} alt="Design System" className="rounded-xl shadow-lg" />

          <div>
            <SectionHeading>Unified Design System</SectionHeading>
            <p className="text-muted-foreground mb-6">
              We built a shared design system so that every screen, every component, and every
              interaction felt like it came from the same place — consistent, accessible, and easy to build on.
            </p>

            <CheckItem>Core design principles that guide every decision across the product</CheckItem>
            <CheckItem>A library of reusable components that any team can pick up and use</CheckItem>
            <CheckItem>Clear typography and color guidelines that work across light and dark contexts</CheckItem>
            <CheckItem>Iconography and imagery standards so visuals never feel out of place</CheckItem>
            <CheckItem>Flexible grid layouts that hold up from mobile all the way to wide desktop screens</CheckItem>
            <CheckItem>Accessibility baked in at every level — not added as an afterthought</CheckItem>
          </div>
        </div>
      </section>

      {/* ================= MOODBOARD ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading>Moodboard</SectionHeading>
            <p className="text-muted-foreground mb-6">
              Before touching a single screen, we explored the visual direction — what should this product
              feel like? Trustworthy, calm, and professional. The moodboard brought that feeling to life
              through colors, textures, and imagery before a single component was designed.
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
            <CheckItem>A guided wizard that walks users through each step of adding a beneficiary</CheckItem>
            <CheckItem>Separate paths for adding someone brand new versus selecting an existing contact</CheckItem>
            <CheckItem>Visual allocation bars with color coding so users instantly understand the split</CheckItem>
            <CheckItem>A clear confirmation screen once a beneficiary has been successfully added</CheckItem>
          </div>
        </div>
      </section>

      {/* ================= RESPONSIVE DESIGN ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading>Responsive Design for Every Device</SectionHeading>
            <p className="text-muted-foreground mb-6">
              People manage their insurance on whatever device is closest — a work laptop, a tablet on the
              couch, or a phone on the go. The redesigned experience adapts to all of them without
              compromising on clarity or ease of use.
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
            <CheckItem>40% less time for users to complete a beneficiary update</CheckItem>
            <CheckItem>25% drop in support tickets related to policy self-service</CheckItem>
            <CheckItem>Full WCAG 2.1 AA accessibility compliance across all redesigned screens</CheckItem>
            <CheckItem>Noticeably higher satisfaction scores from users in post-launch surveys</CheckItem>
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
