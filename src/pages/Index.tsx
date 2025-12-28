import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import DesignProcess from "@/components/home/DesignProcess";
import AIWorkflow from "@/components/home/AIWorkflow";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <DesignProcess />
      <AIWorkflow />
      <Testimonials />
    </Layout>
  );
};

export default Index;
