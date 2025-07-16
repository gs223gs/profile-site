'use server';

import { ContactFormValues } from '@/lib/validations/contact';

type SlackResponse = {
  ok: boolean;
  error?: string;
  ts?: string;
  channel?: string;
};

export async function sendToSlack(data: ContactFormValues) {
  const token = process.env.SLACKBOT_TOKEN;
  
  if (!token) {
    console.error('SLACKBOT_TOKEN is not set');
    return { success: false, error: 'Slack設定が不正です' };
  }

  // Slack投稿用のメッセージをフォーマット
  const message = `
*新しいお問い合わせ*
📧 *メールアドレス:* ${data.email}
👤 *お名前:* ${data.name}
📝 *内容:*
${data.content}
`;

  try {
    const response = await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `token=${encodeURIComponent(token)}&channel=${encodeURIComponent('#contact')}&text=${encodeURIComponent(message.trim())}`,
    });

    const result: SlackResponse = await response.json();

    if (!result.ok) {
      console.error('Slack API error:', result.error);
      return { 
        success: false, 
        error: 'メッセージの送信に失敗しました。' 
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send to Slack:', error);
    return { 
      success: false, 
      error: 'ネットワークエラーが発生しました' 
    };
  }
}