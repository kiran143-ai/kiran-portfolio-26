import Layout from "@/components/layout/Layout";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeading from "@/components/case-study/SectionHeading";
import CheckItem from "@/components/case-study/CheckItem";
import { getAdjacentStudies } from "@/lib/caseStudyData";
import caseStudy2 from "@/assets/SaSol1.png";
import SaSol2 from "@/assets/SaSol2.png";
import SaSol3 from "@/assets/SaSol3.png";
import SaSol4 from "@/assets/SaSol4.png";
import SaSol5 from "@/assets/SaSol5.png";
import SaSol6 from "@/assets/SaSol6.png";




const SaasUxSolutions = () => {
  const { prev, next } = getAdjacentStudies("saas-ux-solutions");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                SaaS
                <br />
                UX Solutions
              </h1>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span>8 months</span>
                <span>B2B</span>
                <span>US</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Designing intuitive and scalable experiences across multiple SaaS platforms. 
              The project focused on creating a smart permission management system that simplifies 
              complex access control while maintaining enterprise-grade security.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <SectionHeading>Problem Statement</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <CheckItem>Role Explosion - Organizations manage 50+ custom roles without clear visibility</CheckItem>
              <CheckItem>Error Prone - Manual role and scope permission assignments causing audit failures</CheckItem>
            </div>
            <div className="space-y-4">
              <CheckItem>Visibility - Lack of clear view of who has access to what</CheckItem>
              <CheckItem>Maintenance - IT teams spend significant time on access management</CheckItem>
            </div>
          </div>
        </div>
      </section>

      {/* UX Solution */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>UX Solution: Smart Permission Management System</SectionHeading>
          <p className="text-muted-foreground max-w-3xl mb-12">
            Created an intuitive permission management system built for SaaS's complexity. 
            Features visual role mapping, real-time validation, intelligent suggestions powered by AI, 
            and streamlined workflows for faster role management.
          </p>

          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Role Templates Dashboard</h3>
              <p className="text-muted-foreground mb-4"><strong>Purpose:</strong> Quick access to pre-defined role templates with module-level permissions</p>
              <p className="text-muted-foreground mb-4"><strong>Components:</strong></p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Role cards showing assigned users, products, and access levels</li>
                <li>• Logical role grouping (Sales, HR, Finance, etc.)</li>
                <li>• One-click template cloning and modification</li>
              </ul>
              <p className="text-muted-foreground mt-4"><strong>UX Goal:</strong> Reduce manual role setup by offering a pre-made library</p>
            </div>
            <img src={caseStudy2} alt="Role Templates Dashboard" className="rounded-xl shadow-lg" />
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <img src={SaSol2} alt="Assign Role Wizard" className="rounded-xl shadow-lg order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-semibold text-foreground mb-4">2. Assign Role & Scope Wizard</h3>
              <p className="text-muted-foreground mb-4"><strong>Purpose:</strong> Guided wizard for intelligent step-by-step role assignment</p>
              <p className="text-muted-foreground mb-4"><strong>Components:</strong></p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Step 1: Select Role Grid</li>
                <li>• Step 2: Select Product (Single, Department, Region)</li>
                <li>• Step 3: Customize scope per area</li>
                <li>• Filter + Search features</li>
              </ul>
              <p className="text-muted-foreground mt-4"><strong>UX Goal:</strong> Prevent errors with guided selection and real-time validation</p>
            </div>

          </div>


                         <div className="grid lg:grid-cols-1 gap-12 items-center mb-16">

            <img src={SaSol3} alt="Assign Role Wizard" className="rounded-xl shadow-lg order-2 lg:order-1" />
          </div>

  

          {/* Feature 3 */}
          <div className="bg-secondary/30 rounded-xl p-8 mb-16">
            <h3 className="text-xl font-semibold text-foreground mb-4">3. Visual Access Map (Tree + Grid UI)</h3>
            <p className="text-muted-foreground mb-4"><strong>Purpose:</strong> Holistic view of what users or groups can see and do across key products</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4"><strong>Components:</strong></p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Tree-style hierarchy (Teams → Roles → User)</li>
                  <li>• Grid view for cross-module permissions</li>
                  <li>• Icon-based access legend (Read/Write/Delete)</li>
                  <li>• Search & filter for rapid role/user lookup</li>
                </ul>
              </div>
              <div>
                <p className="text-muted-foreground"><strong>UX Goal:</strong> Flatten large permission complexity into a simple, 
                unified visual. Empower quick audit setup. Great for reporting to leadership or external auditors.</p>
              </div>
            </div>
                        <div className="grid lg:grid-cols-1 gap-12 items-center mb-16 mt-5">

            <img src={SaSol4} alt="Assign Role Wizard" className="rounded-xl shadow-lg order-2 lg:order-1" />
          </div>

          </div>

          {/* Feature 4 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">4. Access Simulator</h3>
              <p className="text-muted-foreground mb-4"><strong>Purpose:</strong> Simulate system behavior before actually applying changes</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Input: select a role or individual user</li>
                <li>• Output: simulated dashboard reflecting those permissions</li>
                <li>• "What-if" live preview per permission changes</li>
              </ul>
              <p className="text-muted-foreground"><strong>UX Goal:</strong> Minimize security gaps. Allow admin to see real state of any given profile.</p>
            </div>
            <div className="bg-card rounded-xl p-6">
             <img src={SaSol5} alt="Assign Role Wizard" className="rounded-xl shadow-lg order-2 lg:order-1" />
            </div>
          </div>

          {/* Feature 5 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-xl p-6 order-2 lg:order-1">
             
  <img src={SaSol6} alt="Assign Role Wizard" className="rounded-xl shadow-lg order-2 lg:order-1" />


            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-semibold text-foreground mb-4">5. Audit & Access Trail Logs</h3>
              <p className="text-muted-foreground mb-4"><strong>Purpose:</strong> Provide a complete clear history of permission changes</p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Timeline view of changes (who edited, removed what, when)</li>
                <li>• Exportable logs</li>
                <li>• "Smart Flags" (e.g., "Rare access event within the past 30 days")</li>
              </ul>
              <p className="text-muted-foreground"><strong>UX Goal:</strong> Support easy retroactive auditing and faster than investigation</p>
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

export default SaasUxSolutions;
