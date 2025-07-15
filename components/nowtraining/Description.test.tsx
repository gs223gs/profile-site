import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { Description } from './Description';
import { selectedSkillAtom } from '@/atoms/skillAtoms';
import { Skill } from '@/types/skill';

const mockSkill: Skill = {
  id: 'react',
  name: 'React (TypeScript)',
  iconUrl: 'https://skillicons.dev/icons?i=react',
  level: 3,
  startedAt: '2024/07',
  totalHours: 300,
  overview: 'モダンフロント転向のきっかけとなったライブラリ。',
  highlights: [
    'Jotai・React Hook Form・TanStack Query を活用',
    'Todo / Blog SPA を単独実装（Jest UT30 本）',
  ],
};

describe('Description', () => {
  describe('when no skill is selected', () => {
    it('shows initial message', () => {
      const { container } = render(
        <Provider>
          <Description />
        </Provider>
      );

      expect(container.textContent).toContain('スキルを選択してください');
      expect(container.textContent).toContain('上記のスキルアイコンをクリックすると詳細情報が表示されます');
    });
  });

  describe('when skill is selected', () => {
    it('shows skill details with total hours', () => {
      const store = createStore();
      store.set(selectedSkillAtom, mockSkill);

      const { container } = render(
        <Provider store={store}>
          <Description />
        </Provider>
      );

      expect(container.textContent).toContain('React (TypeScript)');
      expect(container.textContent).toContain('レベル: ⭐⭐⭐');
      expect(container.textContent).toContain('開始: 2024/07');
      expect(container.textContent).toContain('累計: 300時間');
      expect(container.textContent).toContain(mockSkill.overview);
      expect(container.textContent).toContain('主な取り組み・実績');
    });

    it('hides total hours when not provided', () => {
      const skillWithoutHours: Skill = {
        ...mockSkill,
        totalHours: undefined,
      };

      const store = createStore();
      store.set(selectedSkillAtom, skillWithoutHours);

      const { container } = render(
        <Provider store={store}>
          <Description />
        </Provider>
      );

      expect(container.textContent).toContain('React (TypeScript)');
      expect(container.textContent).not.toContain('累計:');
    });
  });
});