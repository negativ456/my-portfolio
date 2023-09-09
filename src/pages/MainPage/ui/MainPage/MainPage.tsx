import { AboutSection } from "@/pages/MainPage/ui/AboutSection/AboutSection.tsx";
import { ExperienceSection } from "@/pages/MainPage/ui/ExperienceSection/ExperienceSection.tsx";
import { TechSection } from "@/pages/MainPage/ui/TechSection/TechSection.tsx";
import { ProjectsSection } from "@/pages/MainPage/ui/ProjectsSection/ProjectsSection.tsx";
import { ContactForm, StarsCanvas } from "@/features/ContactForm";

export const MainPage = () => {
  return (
    <div>
      <AboutSection />
      <ExperienceSection />
      <TechSection />
      <ProjectsSection />
      <div className={"relative z-0"}>
        <ContactForm />
        <StarsCanvas />
      </div>
    </div>
  );
};
