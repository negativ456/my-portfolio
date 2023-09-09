import { technologies } from "@/entities/Technology/model/const/technologies.ts";
import { BallCanvas } from "@/shared/ui/canvas";

export const TechnologyList = () => {
  return (
    <div className={"flex flex-wrap justify-center gap-10"}>
      {technologies.map((technology) => (
        <div className={"w-36 h-36"} key={technology.name}>
          <BallCanvas name={technology.name} icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};
