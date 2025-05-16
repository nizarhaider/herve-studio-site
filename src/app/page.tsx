import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
// import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import AIModelsShowcase from "@/components/AIModels";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>
        <Section
          id="features"
          title="Our Services"
          description="Explore the features that set us apart."
        >
        <Benefits />
        </Section>

        <Section
          id="ai-humans"
          title="Check out our AI Humans Showcase"
          description="Get to know them a little better. We promise they won't bite."
        >
          <AIModelsShowcase />
        </Section>

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <FAQ />
        <Stats />

        <CTA />

      </Container>
    </>
  );
};

export default HomePage;
