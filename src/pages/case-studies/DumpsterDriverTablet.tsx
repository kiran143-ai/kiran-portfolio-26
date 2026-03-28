import Layout from "@/components/layout/Layout";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeading from "@/components/case-study/SectionHeading";
import CheckItem from "@/components/case-study/CheckItem";
import { getAdjacentStudies } from "@/lib/caseStudyData";

import DriverTablet1 from "@/assets/DriverTablet1.png";
import DriverTablet2 from "@/assets/DriverTablet2.png";
import DriverTablet3 from "@/assets/DriverTablet3.png";
import DriverTablet6 from "@/assets/DriverTablet6.png";
import DriverTablet7 from "@/assets/DriverTablet7.png";
import DriverTablet8 from "@/assets/DriverTablet8.png";

const DumpsterDriverTablet = () => {
  const { prev, next } = getAdjacentStudies("dumpster-driver-tablet");

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dumpster Driver
              <br />
              Tablet Application
            </h1>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" />
                Research
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" />
                UX
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" />
                UI
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground inline-block" />
                Branding
              </span>
            </div>
          </div>

          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>A Dumpster Driver Tablet Application designed to help drivers efficiently manage dumpster deliveries, pickups, and route navigation.</p>
            <ul className="space-y-1 mt-4 list-none">
              <li>• View assigned pickups, drop-offs, and scheduled jobs.</li>
              <li>• Accept, start, and complete jobs with real-time status updates.</li>
              <li>• Photo upload for before &amp; after proof of service.</li>
              <li>• Instant messaging or call support with dispatch.</li>
              <li>• Automated alerts for schedule changes or delays.</li>
              <li>• Push notifications for urgent job updates.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM STATEMENT ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={DriverTablet1} alt="Driver Tablet - Before State" className="rounded-xl shadow-lg" />

          <div>
            <SectionHeading>Problem Statement</SectionHeading>
            <div className="space-y-4">
              <CheckItem>Inconsistent UI with poor spacing — buttons and controls too small to tap accurately</CheckItem>
              <CheckItem>Too many actions per screen slowing drivers down during active routes</CheckItem>
              <CheckItem>Drivers not receiving alerts for job updates, detours, or priority pickups</CheckItem>
              <CheckItem>Routes not auto-updating with real-time traffic data</CheckItem>
              <CheckItem>Drivers unable to complete routes when landfill (Disposal) is closed in the evening</CheckItem>
              <CheckItem>Maps lacked high-contrast visibility for bright daylight conditions</CheckItem>
              <CheckItem>Minimal taps required but workflow demanded too many steps</CheckItem>
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
              <CheckItem>Simplified the UI with large buttons and minimal clicks for faster task execution</CheckItem>
              <CheckItem>Optimized for speed with fast load times and offline mode for uninterrupted operations</CheckItem>
              <CheckItem>Enhanced route experience with clear maps, voice assistance, and real-time traffic updates</CheckItem>
              <CheckItem>Improved accessibility through high contrast visuals, large fonts, and hands-free options</CheckItem>
              <CheckItem>Driver can expand the map to view and manage all assigned jobs easily</CheckItem>
              <CheckItem>Created action cards for each job to streamline access and reduce cognitive load</CheckItem>
            </div>
          </div>

          <img src={DriverTablet2} alt="Driver Tablet - Redesigned UI" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= RESEARCH ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={DriverTablet3} alt="Research Sessions" className="rounded-xl shadow-lg" />

          <div>
            <SectionHeading>Research</SectionHeading>

            <h3 className="font-semibold mb-2 text-foreground">Stakeholder Interviews</h3>
            <CheckItem>Captured user pain points from internal and external stakeholder interviews</CheckItem>
            <CheckItem>Understood the critical usability issues present in the existing application</CheckItem>

            <h3 className="font-semibold mt-6 mb-2 text-foreground">App Demos</h3>
            <CheckItem>Gained a high-level understanding of the existing application</CheckItem>
            <CheckItem>Deep dived into user flows and application functionality</CheckItem>

            <h3 className="font-semibold mt-6 mb-2 text-foreground">Expert Audit (Heuristic Analysis)</h3>
            <CheckItem>Applied experience audit best practices to the current application</CheckItem>
            <CheckItem>Captured usability problems and identified what was already working well</CheckItem>
          </div>
        </div>
      </section>

      {/* ================= WHAT DID WE LEARN ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>What Did We Learn From Research</SectionHeading>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 mt-4">
            <CheckItem>Pain points: Slow UI, hard-to-read screens, and GPS accuracy issues</CheckItem>
            <CheckItem>Highlight Remove Roll jobs in red and Switch jobs in yellow for quick identification</CheckItem>
            <CheckItem>All photo/video captures should originate from a single, unified source</CheckItem>
            <CheckItem>A dedicated workflow is needed for when the landfill is closed</CheckItem>
            <CheckItem>Form fields should be stepped — one field at a time (Step 1 → Step 2)</CheckItem>
            <CheckItem>Job Disposal captures should use a scanner to avoid blurry images</CheckItem>
            <CheckItem>Should support up to 3 photo captures and video upload per job</CheckItem>
            <CheckItem>Minimize text input using dropdowns, quick selections, and barcode scanning</CheckItem>
            <CheckItem>Add clear labels to all important action icons for driver clarity</CheckItem>
            <CheckItem>Support for last-minute route changes and urgent pickup notifications</CheckItem>
          </div>
        </div>
      </section>

      {/* ================= VISUAL DESIGN ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading>Visual Design</SectionHeading>

          <div className="grid lg:grid-cols-2 gap-12 mt-8 items-start">
            <div>
              <h3 className="font-semibold text-xl mb-4 text-foreground">Before</h3>
              <img src={DriverTablet1} alt="Before Redesign" className="rounded-xl shadow-lg w-full" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4 text-foreground">After</h3>
              <img src={DriverTablet2} alt="After Redesign" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-semibold text-xl mb-4 text-foreground">Updates</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
              <CheckItem>Fully AA compliance &amp; accessibility standards met</CheckItem>
              <CheckItem>Large buttons with minimal clicks make the UI feel fast and simple</CheckItem>
              <CheckItem>Fast load times with offline mode keep drivers uninterrupted on the road</CheckItem>
              <CheckItem>Clear maps with voice assistance make route navigation effortless</CheckItem>
              <CheckItem>High contrast UI with large fonts and hands-free options improve safety</CheckItem>
              <CheckItem>Drivers can expand the map to view assigned jobs and complete them easily</CheckItem>
              <CheckItem>Completed jobs automatically move to the completed jobs tab for disposal</CheckItem>
              <CheckItem>Job details and location clearly displayed on the map per job card</CheckItem>
              <CheckItem>Action cards created for each job for quick, intuitive access</CheckItem>
              <CheckItem>Job types indicated with icons — Switch, Delivery, and Remove</CheckItem>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DRIVER WORK FLOW ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>Driver Work Flow</SectionHeading>
          <img src={DriverTablet6} alt="Driver Work Flow" className="rounded-xl shadow-lg w-full mt-8" />
        </div>
      </section>

      {/* ================= WORK FLOW - LANDFILL CLOSED ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading>Workflow When the Landfill Is Closed</SectionHeading>
          <img src={DriverTablet7} alt="Landfill Closed Work Flow" className="rounded-xl shadow-lg w-full mt-8" />
        </div>
      </section>

      {/* ================= DESIGN SYSTEM ================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading>Design System</SectionHeading>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              To maintain consistency and efficiency across the product, the implementation
              was aligned with a structured design system.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">Using the design system ensures:</p>
            <div className="space-y-4">
              <CheckItem>A unified look and feel across all screens</CheckItem>
              <CheckItem>Faster development cycles by reusing components</CheckItem>
              <CheckItem>Improved user experience and long-term maintainability</CheckItem>
            </div>
          </div>

          <img src={DriverTablet8} alt="Design System" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ================= BUSINESS IMPACT ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading>The Business Impact</SectionHeading>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mt-6">
            <CheckItem>Drivers spend less time navigating the app and more time on actual deliveries and pickups</CheckItem>
            <CheckItem>Intuitive interface helps new drivers quickly learn the system, reducing onboarding and training costs</CheckItem>
            <CheckItem>Clear UI elements minimize confusion, leading to fewer support calls</CheckItem>
            <CheckItem>Job details, route guidance, and confirmations reduce missed pickups and incorrect drop-offs</CheckItem>
            <CheckItem>GPS and real-time route optimization reduces fuel costs by enabling efficient routes</CheckItem>
            <CheckItem>Hands-free and voice-enabled options help drivers stay focused on the road</CheckItem>
            <CheckItem>Intuitive design reduces the learning curve for interacting with dashboards</CheckItem>
            <CheckItem>A modern, polished app positions the company ahead of competitors with outdated systems</CheckItem>
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

export default DumpsterDriverTablet;
