"use client";

import { skills } from "@/types/skill";
import { SkillItem } from "./SkillItem";

export const SkillList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {skills.map((skill) => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
};
