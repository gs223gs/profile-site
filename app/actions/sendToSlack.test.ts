import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendToSlack } from './sendToSlack';
import { ContactFormValues } from '@/lib/validations/contact';

// fetch関数をモック
global.fetch = vi.fn();

describe('sendToSlack', () => {
  const mockData: ContactFormValues = {
    email: 'test@example.com',
    name: 'テストユーザー',
    content: 'これはテストメッセージです。',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // 環境変数をセット
    process.env.SLACKBOT_TOKEN = 'test-token';
  });

  it('正常にメッセージを送信できる', async () => {
    const mockResponse = {
      ok: true,
      ts: '1234567890.123456',
      channel: '#個人開発',
    };

    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => mockResponse,
    } as Response);

    const result = await sendToSlack(mockData);

    expect(result).toEqual({ success: true });
    expect(fetch).toHaveBeenCalledWith(
      'https://slack.com/api/chat.postMessage',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    );
  });

  it('Slack APIエラーの場合は失敗を返す', async () => {
    const mockResponse = {
      ok: false,
      error: 'channel_not_found',
    };

    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => mockResponse,
    } as Response);

    const result = await sendToSlack(mockData);

    expect(result).toEqual({
      success: false,
      error: 'メッセージの送信に失敗しました。',
    });
  });

  it('ネットワークエラーの場合は失敗を返す', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));

    const result = await sendToSlack(mockData);

    expect(result).toEqual({
      success: false,
      error: 'ネットワークエラーが発生しました',
    });
  });

  it('環境変数が設定されていない場合は失敗を返す', async () => {
    delete process.env.SLACKBOT_TOKEN;

    const result = await sendToSlack(mockData);

    expect(result).toEqual({
      success: false,
      error: 'Slack設定が不正です',
    });
    expect(fetch).not.toHaveBeenCalled();
  });
});