import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/shared/lib/animations.ts";
import { styles } from "@/shared/const/styles.ts";
import { SectionWrapper } from "@/widgets/SectionWrapper";
import { SkillCardList } from "@/entities/Skill";
import { useTranslation } from "react-i18next";
export const AboutSection = () => {
  const {t} = useTranslation()
  return (
    <SectionWrapper idName={"about"}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('Introduction')}</p>
        <h2 className={styles.heroHeadText}>{t('Overview.')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"}
      >
        {t('about')}
      </motion.p>

      <SkillCardList />
    </SectionWrapper>
  );
};
