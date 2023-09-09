import { projects } from "@/entities/Project/model/const/projects.ts";
import { ProjectCard } from "@/entities/Project/ui/ProjectCard/ProjectCard.tsx";

export const ProjectCardList = () => {
  return (
    <div className={"mt-20 flex flex-wrap gap-7"}>
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} project={project} />
      ))}
    </div>
  );
};
