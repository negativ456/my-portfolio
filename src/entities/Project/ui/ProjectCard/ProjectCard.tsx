import { motion } from "framer-motion";
import { fadeIn } from "@/shared/lib/animations.ts";
import { Project } from "@/entities/Project/model/types/project.ts";
import ParallaxTilt from "react-parallax-tilt";
import GithubIcon from "@/shared/assets/github.png";
import DemoIcon from "@/shared/assets/demo.png";

interface ProjectCardProps {
  index: number;
  project: Project;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { index, project } = props;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <ParallaxTilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1}
        transitionSpeed={1000}
        className={"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"}
      >
        <div className={"relative w-full h-[230px]"}>
          <img
            src={project.image}
            alt={project.name}
            className={"w-full h-full rounded-2xl object-cover"}
          />
          <div
            className={
              "absolute inset-0 flex gap-2 justify-end m-3 card-img_hover"
            }
          >
            {project.demo_link && (
              <a
                href={project.source_code_link}
                target={"_blank"}
                className={
                  "black-gradient w-10 h-10 rounded-full flex justify-center items-center"
                }
              >
                <img
                  src={GithubIcon}
                  alt={"github"}
                  className={"w-1/2 h-1/2 object-contain"}
                />
              </a>
            )}

            {project.demo_link && (
              <a
                href={project.demo_link}
                target={"_blank"}
                className={
                  "bg-white-100 w-10 h-10 rounded-full flex justify-center items-center"
                }
              >
                <img
                  src={DemoIcon}
                  alt={"demo"}
                  className={"w-1/2 h-1/2 object-contain"}
                />
              </a>
            )}
          </div>
        </div>

        <div className={"mt-5"}>
          <h3 className={"text-white font-bold text-[24px]"}>{project.name}</h3>
          <p className={"mt-2 text-secondary text-[14px]"}>
            {project.description}
          </p>
        </div>

        <div className={"mt-4 flex flex-wrap gap-2"}>
          {project.tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};
