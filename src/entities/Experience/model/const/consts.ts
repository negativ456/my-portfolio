import { Experience } from "@/entities/Experience/model/types/experienceTypes.ts";
import freelance from "@/shared/assets/company/freelance.png";

export const experiences: Experience[] = [
  {
    title: "Web developer",
    companyName: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "August 2022 - Present",
    points: [
      "Project configuration with Webpack",
      "Writing unit tests",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implementing ui kit",
      "Using Storybook",
      "Typing a project using Typescript",
    ],
  },
];
