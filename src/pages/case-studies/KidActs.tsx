import Layout from "@/components/layout/Layout";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import SectionHeading from "@/components/case-study/SectionHeading";
import CheckItem from "@/components/case-study/CheckItem";
import { getAdjacentStudies } from "@/lib/caseStudyData";
import caseStudy5 from "@/assets/case-study-5.png";

const KidActs = () => {
  const { prev, next } = getAdjacentStudies("kid-acts");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Kid Acts
              </h1>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span>3 months</span>
                <span>B2C</span>
                <span>US</span>
                <span>Mobile App</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              KidActs app is for engaging kids with chores to build responsibility, self-reliance, teamwork, 
              respect, strong work ethic, and time management skills. A gamified approach to teaching 
              children life skills through interactive task management.
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
                <CheckItem>Parents struggle to motivate kids to complete household chores</CheckItem>
                <CheckItem>No engaging way to track and reward children's responsibilities</CheckItem>
                <CheckItem>Existing apps lack age-appropriate gamification elements</CheckItem>
                <CheckItem>Difficulty in teaching time management to younger children</CheckItem>
                <CheckItem>No family-wide visibility into task completion and rewards</CheckItem>
              </div>
            </div>
            <div>
              <SectionHeading>Project Solution</SectionHeading>
              <p className="text-muted-foreground mb-6">
                We designed a fun, gamified mobile application that transforms chores into exciting 
                missions for kids while giving parents full control and visibility.
              </p>
              <div className="space-y-4">
                <CheckItem>Engaging gamification with points, badges, and rewards</CheckItem>
                <CheckItem>Age-appropriate UI with colorful and intuitive design</CheckItem>
                <CheckItem>Parent dashboard for task assignment and progress tracking</CheckItem>
                <CheckItem>Family leaderboards to encourage healthy competition</CheckItem>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>Key Features</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Task Missions</h4>
              <p className="text-sm text-muted-foreground">Transform chores into exciting missions with fun descriptions</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Rewards System</h4>
              <p className="text-sm text-muted-foreground">Earn points and redeem for real-world rewards</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Achievement Badges</h4>
              <p className="text-sm text-muted-foreground">Collect badges for completing task streaks</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Family Dashboard</h4>
              <p className="text-sm text-muted-foreground">Parents can manage and monitor all activities</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Progress Tracking</h4>
              <p className="text-sm text-muted-foreground">Visual progress bars and completion stats</p>
            </div>
            <div className="bg-card rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Reminder System</h4>
              <p className="text-sm text-muted-foreground">Gentle notifications to keep kids on track</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading>Research Findings</SectionHeading>
              <p className="text-muted-foreground mb-6">
                We conducted research with 20 families to understand pain points and opportunities 
                in children's task management and reward systems.
              </p>
              <div className="space-y-4">
                <CheckItem>85% of parents struggle with consistent chore completion</CheckItem>
                <CheckItem>Children respond positively to game-like experiences</CheckItem>
                <CheckItem>Immediate visual feedback increases engagement</CheckItem>
                <CheckItem>Family involvement boosts task completion rates</CheckItem>
              </div>
            </div>
            <img src={caseStudy5} alt="KidActs App" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>Design Approach</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Child-Friendly UI</h4>
              <p className="text-muted-foreground">
                Large touch targets, bright colors, fun animations, and simple navigation designed 
                for children ages 5-12 to use independently.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Parent Control</h4>
              <p className="text-muted-foreground">
                Comprehensive dashboard with task templates, reward management, and detailed 
                progress reports for parents.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8">
            <h4 className="font-semibold text-foreground mb-6">User Flow: Completing a Chore</h4>
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex gap-4">
                <span className="text-primary font-semibold">1.</span>
                <span>Child opens app and sees their assigned missions for the day</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-semibold">2.</span>
                <span>Selects a mission and reads the fun task description</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-semibold">3.</span>
                <span>Completes the chore and takes a photo as proof</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-semibold">4.</span>
                <span>Parent reviews and approves the completed task</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-semibold">5.</span>
                <span>Child earns points and celebrates with fun animations</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Visual Designs */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading>Visual Designs</SectionHeading>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-card rounded-2xl p-4 w-64">
              <div className="bg-primary/10 rounded-xl h-96 flex items-center justify-center">
                <p className="text-muted-foreground">Mission Dashboard</p>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-4 w-64">
              <div className="bg-primary/10 rounded-xl h-96 flex items-center justify-center">
                <p className="text-muted-foreground">Rewards Store</p>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-4 w-64">
              <div className="bg-primary/10 rounded-xl h-96 flex items-center justify-center">
                <p className="text-muted-foreground">Achievement Badges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading>The Business Impact</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6">
              <CheckItem>75% increase in chore completion rates in test families</CheckItem>
            </div>
            <div className="bg-card rounded-xl p-6">
              <CheckItem>High engagement with average 4.5 daily app opens per child</CheckItem>
            </div>
            <div className="bg-card rounded-xl p-6">
              <CheckItem>Parents reported reduced conflict around household responsibilities</CheckItem>
            </div>
            <div className="bg-card rounded-xl p-6">
              <CheckItem>Positive feedback on teaching time management skills</CheckItem>
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

export default KidActs;
