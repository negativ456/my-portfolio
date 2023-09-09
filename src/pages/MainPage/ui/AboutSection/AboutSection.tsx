import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/shared/lib/animations.ts";
import { styles } from "@/shared/const/styles.ts";
import { SectionWrapper } from "@/widgets/SectionWrapper";
import { SkillCardList } from "@/entities/Skill";
export const AboutSection = () => {
  return (
    <SectionWrapper idName={"about"}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
      >
        I'm a skilled software developer with experience in JavaScript nad
        TypeScript and expertise in frameworks like React, Vue JS and etc. I'm a
        quick learner. Let's work together to bring your ideas into the life!
      </motion.p>

      <SkillCardList />
    </SectionWrapper>
  );
};
