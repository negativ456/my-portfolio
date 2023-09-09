import { SectionWrapper } from "@/widgets/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/shared/lib/animations.ts";
import { styles } from "@/shared/const/styles.ts";
import { ProjectCardList } from "@/entities/Project/ui/ProjectCardList/ProjectCardList.tsx";
import { useTranslation } from "react-i18next";

export const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper idName={"projects"}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("My work")}</p>
        <h2 className={styles.heroHeadText}>{t("Projects")}.</h2>
      </motion.div>
      <div className={"w-full flex"}>
        <motion.p
          className={"mt-3 text-secondary text-[17px] max-w-3xl leading-30"}
          variants={fadeIn("", "", 0.1, 1)}
        >
          {t("Projects_desc")}
        </motion.p>
      </div>
      <ProjectCardList />
    </SectionWrapper>
  );
};
