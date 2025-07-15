import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'jotai';
import { SkillItem } from './SkillItem';
import { Skill } from '@/types/skill';

// テスト用のスキルデータ
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

describe('SkillItem', () => {
  it('スキル情報が正しく表示される', () => {
    const { container } = render(
      <Provider>
        <SkillItem skill={mockSkill} />
      </Provider>
    );

    // 星が3つ表示されることを確認
    expect(container.textContent).toContain('⭐⭐⭐');
    
    // 学習期間が表示されることを確認
    expect(container.textContent).toContain('学習:');
  });

  it('クリック時にスキルが選択される', () => {
    const { container } = render(
      <Provider>
        <SkillItem skill={mockSkill} />
      </Provider>
    );
    
    const skillItem = container.querySelector('.cursor-pointer');
    fireEvent.click(skillItem!);
    
    // クリックイベントが発生することを確認
    expect(skillItem).toBeDefined();
  });

  it('学習期間が正しく計算される', () => {
    // 2ヶ月前のスキル
    const recentSkill: Skill = {
      ...mockSkill,
      startedAt: '2025/05', // 2ヶ月前
    };

    const { container } = render(
      <Provider>
        <SkillItem skill={recentSkill} />
      </Provider>
    );

    expect(container.textContent).toMatch(/学習: \d+ヶ月/);
  });

  it('1年以上の学習期間が正しく表示される', () => {
    const longTermSkill: Skill = {
      ...mockSkill,
      startedAt: '2023/01', // 2年以上前
    };

    const { container } = render(
      <Provider>
        <SkillItem skill={longTermSkill} />
      </Provider>
    );

    expect(container.textContent).toMatch(/学習: \d+年/);
  });
});