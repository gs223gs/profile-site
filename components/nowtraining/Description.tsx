'use client';

import { useAtom } from 'jotai';
import { selectedSkillAtom } from '@/atoms/skillAtoms';
import { Card, CardContent } from '@/components/ui/card';

export const Description = () => {
  const [selectedSkill] = useAtom(selectedSkillAtom);

  if (!selectedSkill) {
    return (
      <Card className="w-full">
        <CardContent className="flex items-center justify-center h-48 text-gray-500 p-6">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">スキルを選択してください</h3>
            <p className="text-sm">上記のスキルアイコンをクリックすると詳細情報が表示されます</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{selectedSkill.name}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span>レベル: {'⭐'.repeat(selectedSkill.level)}</span>
            <span>開始: {selectedSkill.startedAt}</span>
            {selectedSkill.totalHours && (
              <span>累計: {selectedSkill.totalHours}時間</span>
            )}
          </div>
          <p className="text-gray-700 leading-relaxed">{selectedSkill.overview}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">主な取り組み・実績</h3>
          <ul className="space-y-2">
            {selectedSkill.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};