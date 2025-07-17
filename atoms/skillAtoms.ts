import { atom } from 'jotai';
import { Skill } from '@/types/skill';

// 選択されたスキルの状態を管理
export const selectedSkillAtom = atom<Skill | null>(null);

// スキル選択のアクション
export const selectSkillAtom = atom(
  null,
  (get, set, skill: Skill) => {
    set(selectedSkillAtom, skill);
  }
);

// モバイル用モーダルの開閉状態を管理
export const isSkillModalOpenAtom = atom<boolean>(false);