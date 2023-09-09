import courseApp from "@/shared/assets/projects/course-app.png";
import promptopia from "@/shared/assets/projects/promptopia.jpg";
import sber from "@/shared/assets/projects/sber-ai.png";
import aton from "@/shared/assets/projects/angular.png";
import portfoio from "@/shared/assets/projects/portfolio.png";
import { Project } from "@/entities/Project/model/types/project.ts";
export const projects: Project[] = [
  {
    name: "Course app (ulbi tv)",
    description:
      "Web application created as the result of successful completion of advanced frontend course. Includes a lot of technics such as FSD architecture, async reducers, custom plugins",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "FSD",
        color: "pink-text-gradient",
      },
    ],
    image: courseApp,
    demo_link: "https://course-app.ru",
    source_code_link: "https://github.com/negativ456/production-project",
  },
  {
    name: "Promptopia",
    description:
      "A simple web application that allows users to create prompts and share them. You can also search the prompt you want and visit others uses profile page.",
    tags: [
      {
        name: "next",
        color: "orange-text-gradient",
      },
      {
        name: "rtk query",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/negativ456/promptopia-nextjs",
    demo_link: "https://promptopia-nextjs-ebon.vercel.app/",
  },
  {
    name: "Sber AI markup platform",
    description:
      "A platform to markup data. There are such markup options as: image markup, text description, image loading, as well as combinations. The task was set by the Sber AI team",
    tags: [
      {
        name: "vue js",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "pinia",
        color: "pink-text-gradient",
      },
      {
        name: "vitest",
        color: "orange-text-gradient",
      },
    ],
    image: sber,
  },
  {
    name: "Aton internship task",
    description:
      "Simple application with authorization, pagination, notifications system. Created as the result of Aton internship task.",
    tags: [
      {
        name: "angular js",
        color: "orange-text-gradient",
      },
      {
        name: "fsd",
        color: "green-text-gradient",
      },
      {
        name: "ngrx",
        color: "pink-text-gradient",
      },
    ],
    image: aton,
    source_code_link: "https://github.com/negativ456/angular-aton-app",
    demo_link: "https://negativ456.github.io/angular-aton-app/",
  },
  {
    name: "Developer portfolio",
    description:
      "A developer portfolio including some three js models, internationalisation, feedback form. The architecture of the application is built on the basis of Feature-Sliced Design",
    tags: [
      {
        name: "react js",
        color: "orange-text-gradient",
      },
      {
        name: "fsd",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three js",
        color: "blue-text-gradient",
      },
    ],
    image: portfoio,
  },
];
