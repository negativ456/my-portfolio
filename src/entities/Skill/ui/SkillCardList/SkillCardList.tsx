import { cards } from "@/entities/Skill/model/const/cardConst.ts";
import { SkillCard } from "@/entities/Skill/ui/SkillCard/SkillCard.tsx";

export const SkillCardList = () => {
  return (
    <div className={"mt-20 flex flex-wrap gap-10"}>
      {cards.map((card, index) => (
        <SkillCard key={index} index={index} card={card} />
      ))}
    </div>
  );
};
