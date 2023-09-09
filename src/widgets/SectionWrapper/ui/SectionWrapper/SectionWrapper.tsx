import { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/shared/lib/animations.ts";
import { styles } from "@/shared/const/styles.ts";

interface SectionWrapperProps {
  children: ReactNode;
  idName: string;
}
export const SectionWrapper = ({ children, idName }: SectionWrapperProps) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className={"hash-span"} id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};
