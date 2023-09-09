import { SectionWrapper } from "@/widgets/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "@/shared/lib/animations.ts";
import { styles } from "@/shared/const/styles.ts";
import React, { ChangeEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "@/shared/ui/canvas";

// template_d7kz03v

// service_n6gcd7c
// GJGhT_USc9afhGfXB

interface Form {
  name: string;
  email: string;
  message: string;
}
export const ContactForm = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });

  const onChangeForm = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_n6gcd7c",
        "template_d7kz03v",
        {
          from_name: form.name,
          to_name: "Daniel",
          from_email: form.email,
          to_email: "fdaniil878@gmail.com",
          message: form.message,
        },
        "GJGhT_USc9afhGfXB"
      );
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <SectionWrapper idName={"contact"}>
      <div
        className={
          "xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
        }
      >
        <motion.div
          className={"flex-[0.75] bg-black-100 p-8 rounded-2xl"}
          variants={slideIn("left", "tween", 0.2, 1)}
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form className={"mt-12 flex flex-col gap-8"} ref={formRef}>
            <label className={"flex flex-col"}>
              <span className={"text-white font-medium mb-4"}>Your name</span>
              <input
                type={"text"}
                name={"name"}
                value={form.name}
                onChange={onChangeForm}
                placeholder={"Whats your name ?"}
                className={
                  "bg-tertiary py-4 px-6 border-none font-medium placeholder:text-secondary text-white rounded-lg outlined-none"
                }
              />
            </label>
            <label className={"flex flex-col"}>
              <span className={"text-white font-medium mb-4"}>Your email</span>
              <input
                type={"email"}
                name={"email"}
                value={form.email}
                onChange={onChangeForm}
                placeholder={"Whats your email ?"}
                className={
                  "bg-tertiary py-4 px-6 border-none font-medium placeholder:text-secondary text-white rounded-lg outlined-none"
                }
              />
            </label>
            <label className={"flex flex-col"}>
              <span className={"text-white font-medium mb-4"}>
                Your message
              </span>
              <textarea
                rows={7}
                name={"message"}
                value={form.message}
                onChange={onChangeForm}
                placeholder={"Whats do you want to say ?"}
                className={
                  "bg-tertiary py-4 resize-none px-6 border-none font-medium placeholder:text-secondary text-white rounded-lg outlined-none"
                }
              />
            </label>

            <button
              className={
                "bg-tertiary shadow-primary rounded-xl py-3 px-8 text-white font-bold shadow-md outline-none w-fit"
              }
              type={"submit"}
              onClick={onSubmit}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          className={"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"}
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
