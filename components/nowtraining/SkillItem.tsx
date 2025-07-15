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
    // "YYYY/MM"形式の文字列を年と月に分割して数値化
    const [year, month] = startedAt.split("/").map(Number);
    // 学習開始日を作成（月は0ベースなので-1）
    const startDate = new Date(year, month - 1);
    // 現在の日付を取得
    const now = new Date();

    // 開始日から現在までの月数を計算
    const diffMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    // 1年未満の場合は月数のみ表示
    if (diffMonths < 12) {
      return `${diffMonths}ヶ月`;
    } else {
      // 1年以上の場合は年数と余りの月数を計算
      const years = Math.floor(diffMonths / 12);
      const remainingMonths = diffMonths % 12;
      // 余りの月数がない場合は年数のみ、ある場合は年月両方を表示
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
