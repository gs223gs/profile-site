import { SkillList } from "@/components/nowtraining/SkillList";
import { Description } from "@/components/nowtraining/Description";
import { SkillModal } from "@/components/nowtraining/SkillModal";

export default function NowTrainingPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <p className="text-gray-600 text-center">
        現在学習中・活用中の技術スタック一覧です。アイコンをクリックすると詳細が表示されます。
      </p>
      <div className="flex gap-4 items-stretch">
        <div className="flex-1">
          <SkillList />
        </div>

        {/* デスクトップ表示 */}
        <div className="hidden md:block flex-1">
          <Description />
        </div>
      </div>

      {/* モバイル表示 */}
      <div className="block md:hidden">
        <SkillModal />
      </div>
    </div>
  );
}
