import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "@/entities/Experience/model/const/consts.ts";
import { ExperienceCard } from "@/entities/Experience/ui/ExperienceCard/ExperienceCard.tsx";

export const ExperienceCardList = () => {
  return (
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};
