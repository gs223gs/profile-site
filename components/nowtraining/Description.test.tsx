import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'jotai';
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
  it('スキルが選択されていない場合は初期メッセージを表示', () => {
    render(
      <Provider>
        <Description />
      </Provider>
    );

    expect(screen.getByText('スキルを選択してください')).toBeDefined();
    expect(screen.getByText('上記のスキルアイコンをクリックすると詳細情報が表示されます')).toBeDefined();
  });

  it('スキルが選択されている場合は詳細情報を表示', () => {
    const TestComponent = () => {
      return (
        <Provider initialValues={[[selectedSkillAtom, mockSkill]]}>
          <Description />
        </Provider>
      );
    };

    render(<TestComponent />);

    // スキル名が表示されることを確認
    expect(screen.getByText('React (TypeScript)')).toBeDefined();
    
    // レベルが表示されることを確認
    expect(screen.getByText('レベル: ⭐⭐⭐')).toBeDefined();
    
    // 開始日が表示されることを確認
    expect(screen.getByText('開始: 2024/07')).toBeDefined();
    
    // 累計時間が表示されることを確認
    expect(screen.getByText('累計: 300時間')).toBeDefined();
    
    // 概要が表示されることを確認
    expect(screen.getByText(mockSkill.overview)).toBeDefined();
    
    // ハイライトが表示されることを確認
    expect(screen.getByText('主な取り組み・実績')).toBeDefined();
    mockSkill.highlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeDefined();
    });
  });

  it('累計時間がないスキルでは時間表示しない', () => {
    const skillWithoutHours: Skill = {
      ...mockSkill,
      totalHours: undefined,
    };

    const TestComponent = () => {
      return (
        <Provider initialValues={[[selectedSkillAtom, skillWithoutHours]]}>
          <Description />
        </Provider>
      );
    };

    render(<TestComponent />);

    expect(screen.queryByText(/累計:/)).toBe(null);
  });
});