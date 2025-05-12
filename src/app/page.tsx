import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import ProjectTabs from "@/sections/more-projects";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
    </div>
  );
}
