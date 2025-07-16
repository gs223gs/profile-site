import { SkillList } from "@/components/nowtraining/SkillList";
import { Description } from "@/components/nowtraining/Description";

export default function NowTrainingPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <p className="text-gray-600 text-center">
        現在学習中・活用中の技術スタック一覧です。アイコンをクリックすると詳細が表示されます。
      </p>

      <SkillList />
      <Description />
    </div>
  );
}
