import { Card } from "@/entities/Skill/model/types/cardTypes.ts";
import WebIcon from "@/shared/assets/web.png";
import MobileIcon from "@/shared/assets/mobile.png";
import Backend from "@/shared/assets/backend.png";
import Creator from "@/shared/assets/creator.png";

export const cards: Card[] = [
  {
    name: "skill.card1",
    img: WebIcon,
  },
  {
    name: "skill.card2",
    img: MobileIcon,
  },
  {
    name: "skill.card3",
    img: Backend,
  },
  {
    name: "skill.card4",
    img: Creator,
  },
];
