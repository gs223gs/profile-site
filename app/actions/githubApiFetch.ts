'use server';

import { request, gql } from 'graphql-request';

const ENDPOINT = 'https://api.github.com/graphql';

// 環境変数の確認
if (!process.env.GITHUB_TOKEN) {
  throw new Error('GITHUB_TOKEN environment variable is not set');
}

const HEADERS = { 
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  'User-Agent': 'NextJS-App'
} as const;

const QUERY = gql`
  query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date                  # "2025-03-14"
              contributionCount     # Commit + PR + Issue + Review
            }
          }
        }
      }
    }
  }
`;

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface GitHubResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: Week[];
      };
    };
  };
}

// デフォルトユーザー名
const DEFAULT_USER = "developerhost";

/** 直近12か月の日次 → 月次に集計して返す Server Action */
export async function getMonthlyContributions(
  login: string = DEFAULT_USER
): Promise<Record<string, number>> {
  try {
    const now = new Date();
    const from = new Date(now);
    from.setMonth(now.getMonth() - 11, 1);

    console.log('GitHub API Request:', {
      login,
      from: from.toISOString(),
      to: now.toISOString(),
      hasToken: !!process.env.GITHUB_TOKEN,
      tokenPrefix: process.env.GITHUB_TOKEN?.slice(0, 8) + '...'
    });

    const response = await request<GitHubResponse>(
      ENDPOINT,
      QUERY,
      { login, from: from.toISOString(), to: now.toISOString() },
      HEADERS
    );

    const days = response.user
      .contributionsCollection
      .contributionCalendar
      .weeks.flatMap((w: Week) => w.contributionDays);

    // YYYY-MM 単位で集計
    return days.reduce<Record<string, number>>((acc, d) => {
      const ym = d.date.slice(0, 7);
      acc[ym] = (acc[ym] ?? 0) + d.contributionCount;
      return acc;
    }, {});
  } catch (error) {
    console.error('GitHub API Error:', error);
    
    // 403エラーの場合、具体的な原因を推測
    if (error instanceof Error && error.message.includes('403')) {
      console.error('GitHub Token may need these scopes: read:user, repo (for private repos)');
    }
    
    // エラー時は空のオブジェクトを返す
    return {};
  }
}
