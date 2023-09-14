import { styles } from "@/shared/const/styles.ts";
import { motion } from "framer-motion";
import { ComputersCanvas } from "@/shared/ui/canvas";
import { Trans, useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={"relative max-w-7xl h-screen mx-auto"}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className={"w-5 h-5 rounded-full bg-[#915eff]"} />
          <motion.div
            animate={{ height: [0, 320] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className={"w-1 h-40 sm:h-80 violet-gradient"}
          />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <Trans i18nKey={'greetings'}>
            Hi, I'm <span className={"text-[#915eff]"}>Daniel</span>
            </Trans>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("I develop web applications")}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className={
          "absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        }
      >
        <a href="#about">
          <div
            className={
              "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
            }
          >
            <motion.div
              className={"w-3 h-3 rounded-full bg-secondary mb-1"}
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};
