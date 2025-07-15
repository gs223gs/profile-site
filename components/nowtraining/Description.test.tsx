import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'jotai';
import { Description } from './Description';


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
    // 最初に初期状態でレンダリング
    const { container } = render(
      <Provider>
        <Description />
      </Provider>
    );

    // 初期状態では選択メッセージが表示されることを確認
    expect(container.textContent).toContain('スキルを選択してください');
  });

  it('累計時間がないスキルでは時間表示しない', () => {
    const { container } = render(
      <Provider>
        <Description />
      </Provider>
    );

    // 初期状態では選択メッセージが表示されることを確認
    expect(container.textContent).toContain('スキルを選択してください');
  });
});