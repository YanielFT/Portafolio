import { Header } from "@/sections/Header";
import { HeroSection } from '../sections/Hero';
import { ProjectsSection } from '../sections/Projects';

export default async function Home() {
  return (
    <div className="h-[80rem]">
      <Header />
      <HeroSection />
      <ProjectsSection />
      </div>
  );
}
