import { SectionWrapper } from "@/widgets/SectionWrapper";
import { TechnologyList } from "@/entities/Technology";

export const TechSection = () => {
  return (
    <SectionWrapper idName={"Tech"}>
      <TechnologyList />
    </SectionWrapper>
  );
};
