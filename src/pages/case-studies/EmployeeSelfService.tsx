import Layout from "@/components/layout/Layout";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeading from "@/components/case-study/SectionHeading";
import CheckItem from "@/components/case-study/CheckItem";
import { getAdjacentStudies } from "@/lib/caseStudyData";
import caseStudy4 from "@/assets/case-study-4.png";
import ESSResearch from "@/assets/ESS_Research.png";
import ESSWireframe from "@/assets/ESS_Wireframe.png";
import EssVisualDesign from "@/assets/Ess_VisualDesign.png";



const EmployeeSelfService = () => {
  const { prev, next } = getAdjacentStudies("employee-self-service");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Employee Self
                <br />
                Services
              </h1>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span>5 months</span>
                <span>B2E</span>
                <span>US</span>
                <span>Mobile App</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              ESS is a mobile app that provides employees with access to their personal records and payroll details. 
              It enables employees to manage their HR-related tasks independently, reducing the administrative 
              burden on HR teams while improving employee satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading>Problem Statement</SectionHeading>
              <div className="space-y-4">
                <CheckItem>The existing application is not user-friendly and has limited functionality</CheckItem>
                <CheckItem>Employees require HR assistance for simple tasks</CheckItem>
                <CheckItem>The Payroll section did not display critical information for employees</CheckItem>
                <CheckItem>Users face delays in accessing personal records like leave balance, payslips</CheckItem>
                <CheckItem>Lack of offline functionality makes it unusable in poor connectivity</CheckItem>
              </div>
            </div>
            <div>
              <SectionHeading>Project Solution</SectionHeading>
              <p className="text-muted-foreground mb-6">
                We designed a mobile-first ESS solution that provides employees with quick access to all 
                HR-related information, reducing dependency on HR teams for routine queries.
              </p>
              <div className="space-y-4">
                <CheckItem>Intuitive mobile-first UI with modern design patterns</CheckItem>
                <CheckItem>Complete self-service capabilities for leave, payroll, and personal data</CheckItem>
                <CheckItem>Offline mode for accessing critical information</CheckItem>
                <CheckItem>Push notifications for approvals and important updates</CheckItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>Features of employee self-service</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Sign in</h4>
              <p className="text-sm text-muted-foreground">Secure authentication with biometric support</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Home</h4>
              <p className="text-sm text-muted-foreground">Dashboard with quick access to all features</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Payslip</h4>
              <p className="text-sm text-muted-foreground">Detailed payslip view with download option</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Leave Management</h4>
              <p className="text-sm text-muted-foreground">Apply, view, and track leave requests</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Time & Attendance</h4>
              <p className="text-sm text-muted-foreground">Clock in/out and view attendance history</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Profile Management</h4>
              <p className="text-sm text-muted-foreground">Update personal and emergency contact info</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Claim Management</h4>
              <p className="text-muted-foreground mb-4">
                View and submit reimbursement claims with receipt upload functionality. 
                Track claim status in real-time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Document Services</h4>
              <p className="text-muted-foreground">
                Request and download official documents like employment verification letters, 
                tax forms, and policy documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={ESSResearch} alt="Employee Self Service App" className="rounded-xl shadow-lg" />
            <div>
              <SectionHeading>Research (Qualitative)</SectionHeading>
              <p className="text-muted-foreground mb-6">Objectives of research:</p>
              <ol className="space-y-3 text-muted-foreground">
                <li>1. What would you like to see in the solution you had?</li>
                <li>2. What details do you want?</li>
                <li>3. What is your everyday flow?</li>
                <li>4. How often do you communicate with HR for services?</li>
                <li>5. List some tips on how improve it</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Research Findings */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>What did we learn from research</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <CheckItem>Most employees check payroll details 2-3 times monthly</CheckItem>
              <CheckItem>HR receives 40+ basic inquiry tickets weekly</CheckItem>
              <CheckItem>Leave balance is the most frequently accessed feature</CheckItem>
            </div>
            <div className="space-y-4">
              <CheckItem>Mobile access is critical for field employees</CheckItem>
              <CheckItem>Approval notifications need to be instant</CheckItem>
              <CheckItem>Users prefer visual calendars for leave management</CheckItem>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8">
            <h4 className="font-semibold text-foreground mb-6">Sample Flow for Leave Request</h4>
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex gap-4">
                <span className="text-primary font-semibold">1.</span>
                <span><strong>Open the App:</strong> Open app and tap Leave Request from the landing page</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-semibold">2.</span>
                <span><strong>Select Leave Type:</strong> User selects leave type from the dropdown (Sick, casual, etc.)</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-semibold">3.</span>
                <span><strong>Choose Dates:</strong> Use calendar picker to select start and end date</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-semibold">4.</span>
                <span><strong>Add Comments:</strong> Add notes for manager if needed and attach documents</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-semibold">5.</span>
                <span><strong>Submit Request:</strong> User confirms and submits request for approval</span>
              </li>
            </ol>
            <br /> 
          
                      <img src={ESSWireframe} alt="Employee Self Service App" className="rounded-xl shadow-lg" />

          </div>

        </div>
      </section>

      {/* Visual Designs */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading>Visual Designs</SectionHeading>
          <div className="flex justify-center gap-8 flex-wrap">
                                    <img src={EssVisualDesign} alt="Employee Self Service App" className="rounded-xl shadow-lg" />

            
            
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>The Business Impact</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6">
              <CheckItem>Significantly improved the work experience for employees while also addressing existing issues</CheckItem>
            </div>
            <div className="bg-card rounded-xl p-6">
              <CheckItem>Achieved comprehensive implementation, leaving no room for any extra enhancements or improvements</CheckItem>
            </div>
            <div className="bg-card rounded-xl p-6">
              <CheckItem>60% less HR requests for routine tasks, reducing ticket volumes</CheckItem>
            </div>
            <div className="bg-card rounded-xl p-6">
              <CheckItem>Reduced training requirements with intuitive interface providing flexibility and speed</CheckItem>
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

export default EmployeeSelfService;
