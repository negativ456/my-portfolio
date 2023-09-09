import { Card } from "@/entities/Skill/model/types/cardTypes.ts";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/shared/lib/animations.ts";

interface SkillCardProps {
  card: Card;
  index: number;
}
export const SkillCard = ({ card, index }: SkillCardProps) => {
  return (
    <motion.div
      className={"xs:w-[250px] w-full"}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <ParallaxTilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1}
        transitionSpeed={1000}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className={
            "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          }
        >
          <img
            src={card.img}
            alt={card.name}
            className={"w-16 h-16 object-contain"}
          />
          <h3 className={"text-white text-[20px] font-bold text-center"}>
            {card.name}
          </h3>
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};
