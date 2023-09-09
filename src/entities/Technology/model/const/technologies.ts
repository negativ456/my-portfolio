import { Technology } from "@/entities/Technology/model/types/technology.ts";
import html from "@/shared/assets/tech/html.png";
import css from "@/shared/assets/tech/css.png";
import javascript from "@/shared/assets/tech/javascript.png";
import typescript from "@/shared/assets/tech/typescript.png";
import reactjs from "@/shared/assets/tech/reactjs.png";
import redux from "@/shared/assets/tech/redux.png";
import tailwind from "@/shared/assets/tech/tailwind.png";
import storybook from "@/shared/assets/tech/storybook.svg";
import vueJs from "@/shared/assets/tech/vue-js.svg";
import webpack from "@/shared/assets/tech/webpack.svg";
import angular from "@/shared/assets/tech/angular.svg";
import git from "@/shared/assets/tech/git.png";
import figma from "@/shared/assets/tech/figma.png";

export const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
  {
    name: "Vue JS",
    icon: vueJs,
  },
  {
    name: "Angular",
    icon: angular,
  },
];
