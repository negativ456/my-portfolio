import { SectionWrapper } from "@/widgets/SectionWrapper";
import { motion } from "framer-motion";
import { textVariant } from "@/shared/lib/animations.ts";
import { styles } from "@/shared/const/styles.ts";
import { ExperienceCardList } from "@/entities/Experience";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";

export const ExperienceSection = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper idName={"work"}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("What I have done so far")}</p>
        <h2 className={styles.heroHeadText}>{t("Work experience")}</h2>
      </motion.div>
      <ExperienceCardList />
    </SectionWrapper>
  );
};
