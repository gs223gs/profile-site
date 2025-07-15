"use client";

import { useAtom } from "jotai";
import Image from "next/image";
import { Skill } from "@/types/skill";
import { selectSkillAtom } from "@/atoms/skillAtoms";
import { BorderedContainer } from "../ui/bordered-container";

interface SkillItemProps {
  skill: Skill;
}

export const SkillItem = ({ skill }: SkillItemProps) => {
  const [, selectSkill] = useAtom(selectSkillAtom);

  const handleClick = () => {
    selectSkill(skill);
  };

  // レベル数に応じた星を生成
  const renderStars = (level: number) => {
    return "⭐".repeat(level);
  };

  // 学習期間を計算
  const calculateStudyPeriod = (startedAt: string) => {
    const [year, month] = startedAt.split("/").map(Number);
    const startDate = new Date(year, month - 1);
    const now = new Date();

    const diffMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    if (diffMonths < 12) {
      return `${diffMonths}ヶ月`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const remainingMonths = diffMonths % 12;
      return remainingMonths === 0
        ? `${years}年`
        : `${years}年${remainingMonths}ヶ月`;
    }
  };

  return (
    <BorderedContainer className="w-full hover:shadow-lg transition-shadow cursor-pointer">
      <div onClick={handleClick} className="flex flex-col items-center">
        {/* アイコン */}
        <div className="w-16 h-16 mb-2  flex items-center justify-center">
          <Image
            src={skill.iconUrl}
            alt={skill.name}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* 星評価 */}
        <div className="text-sm mb-1">{renderStars(skill.level)}</div>

        {/* 学習期間 */}
        <div className="text-xs text-gray-600 text-center">
          学習: {calculateStudyPeriod(skill.startedAt)}
        </div>
      </div>
    </BorderedContainer>
  );
};
