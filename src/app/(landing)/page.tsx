import { Header } from "@/sections/Header";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact/Contact";

export default async function Home() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
