/**
 * GitHub APIを使用してユーザーのコントリビューション情報を取得するServer Action
 * 
 * 使用方法:
 * 1. 環境変数の設定
 *    - .env.localファイルに GITHUB_TOKEN を設定する
 *    - 例: GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *    - トークンの作成: https://github.com/settings/tokens
 *    - 必要なスコープ: read:user, repo (プライベートリポジトリの貢献も含める場合)
 * 
 * 2. クライアントコンポーネントからの呼び出し
 *    ```tsx
 *    import { getMonthlyContributions } from '@/app/actions/githubApiFetch';
 *    
 *    // デフォルトユーザー（developerhost）の情報を取得
 *    const contributions = await getMonthlyContributions();
 *    
 *    // 特定のユーザーの情報を取得
 *    const contributions = await getMonthlyContributions('octocat');
 *    ```
 * 
 * 3. 戻り値の形式
 *    ```ts
 *    {
 *      "2024-01": 45,  // 2024年1月: 45コントリビューション
 *      "2024-02": 30,  // 2024年2月: 30コントリビューション
 *      ...
 *    }
 *    ```
 */
'use server';

import { request, gql } from 'graphql-request';

const ENDPOINT = 'https://api.github.com/graphql';

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
const DEFAULT_USER = "gs223gs";

/**
 * GitHubトークンを取得
 */
function getGitHubToken(): string {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error('GITHUB_TOKEN environment variable is not set');
  }
  return token;
}

/**
 * APIリクエスト用のヘッダーを作成
 */
function createHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    'User-Agent': 'NextJS-App'
  } as const;
}

/**
 * 日次コントリビューションデータを月次に集計
 */
function aggregateContributionsByMonth(days: ContributionDay[]): Record<string, number> {
  return days.reduce<Record<string, number>>((acc, d) => {
    const ym = d.date.slice(0, 7);
    acc[ym] = (acc[ym] ?? 0) + d.contributionCount;
    return acc;
  }, {});
}

/**
 * GitHub APIへのリクエストを実行
 */
async function fetchGitHubContributions(
  login: string,
  from: string,
  to: string,
  headers: Record<string, string>
): Promise<GitHubResponse> {
  return request<GitHubResponse>(
    ENDPOINT,
    QUERY,
    { login, from, to },
    headers
  );
}

/**
 * 直近12か月の日次コントリビューションを月次に集計して返す Server Action
 * 
 * @param login - GitHubユーザー名（省略時は"gs223gs"）
 * @returns 月別のコントリビューション数（例: {"2024-01": 45, "2024-02": 30}）
 * @throws エラー時は空のオブジェクトを返す
 * 
 * @example
 * // React Server Componentでの使用例
 * export default async function StatsPage() {
 *   const contributions = await getMonthlyContributions();
 *   return <ContributionChart data={contributions} />;
 * }
 * 
 * @example
 * // Client Componentでの使用例（useEffectやイベントハンドラ内で）
 * useEffect(() => {
 *   getMonthlyContributions('octocat').then(data => {
 *     setContributions(data);
 *   });
 * }, []);
 */
export async function getMonthlyContributions(
  login: string = DEFAULT_USER
): Promise<Record<string, number>> {
  try {
    const now = new Date();
    const from = new Date(now);
    from.setMonth(now.getMonth() - 11, 1);

    const token = getGitHubToken();
    const headers = createHeaders(token);

    const response = await fetchGitHubContributions(
      login,
      from.toISOString(),
      now.toISOString(),
      headers
    );

    const days = response.user
      .contributionsCollection
      .contributionCalendar
      .weeks.flatMap((w: Week) => w.contributionDays);

    return aggregateContributionsByMonth(days);
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