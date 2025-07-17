'use client';

import { useAtom } from 'jotai';
import { selectedSkillAtom, isSkillModalOpenAtom } from '@/atoms/skillAtoms';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export const SkillModal = () => {
  const [selectedSkill] = useAtom(selectedSkillAtom);
  const [isOpen, setIsOpen] = useAtom(isSkillModalOpenAtom);

  if (!selectedSkill) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {selectedSkill.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>レベル: {'⭐'.repeat(selectedSkill.level)}</span>
            <span>開始: {selectedSkill.startedAt}</span>
          </div>
          
          {selectedSkill.totalHours && (
            <div className="text-sm text-gray-600">
              累計: {selectedSkill.totalHours}時間
            </div>
          )}
          
          <div>
            <p className="text-gray-700 leading-relaxed text-sm">
              {selectedSkill.overview}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">主な取り組み・実績</h3>
            <ul className="space-y-1">
              {selectedSkill.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-sm">•</span>
                  <span className="text-gray-700 text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};