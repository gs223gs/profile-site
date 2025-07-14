import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  aggregateContributionsByMonth,
  createHeaders,
  getGitHubToken,
  fetchGitHubContributions,
  getMonthlyContributions,
  type ContributionDay,
  type GitHubResponse,
} from './githubApiFetch'
import * as graphqlRequest from 'graphql-request'

// graphql-requestモジュールをモック
vi.mock('graphql-request', () => ({
  request: vi.fn(),
  gql: vi.fn((strings: TemplateStringsArray) => strings[0]),
}))

describe('githubApiFetch', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // 環境変数をリセット
    delete process.env.GITHUB_TOKEN
  })

  describe('getGitHubToken', () => {
    it('環境変数からトークンを取得できる', () => {
      process.env.GITHUB_TOKEN = 'test-token'
      const token = getGitHubToken()
      expect(token).toBe('test-token')
    })

    it('環境変数が設定されていない場合はエラーをスロー', () => {
      expect(() => getGitHubToken()).toThrow('GITHUB_TOKEN environment variable is not set')
    })
  })

  describe('createHeaders', () => {
    it('正しいヘッダーを作成する', () => {
      const headers = createHeaders('test-token')
      expect(headers).toEqual({
        Authorization: 'Bearer test-token',
        'User-Agent': 'NextJS-App',
      })
    })
  })

  describe('aggregateContributionsByMonth', () => {
    it('日次データを月次に集計する', () => {
      const days: ContributionDay[] = [
        { date: '2024-01-01', contributionCount: 5 },
        { date: '2024-01-15', contributionCount: 3 },
        { date: '2024-02-01', contributionCount: 10 },
        { date: '2024-02-28', contributionCount: 2 },
      ]

      const result = aggregateContributionsByMonth(days)

      expect(result).toEqual({
        '2024-01': 8,
        '2024-02': 12,
      })
    })

    it('空の配列を処理できる', () => {
      const result = aggregateContributionsByMonth([])
      expect(result).toEqual({})
    })
  })

  describe('fetchGitHubContributions', () => {
    it('APIリクエストを正しく実行する', async () => {
      const mockResponse: GitHubResponse = {
        user: {
          contributionsCollection: {
            contributionCalendar: {
              weeks: [
                {
                  contributionDays: [
                    { date: '2024-01-01', contributionCount: 5 },
                  ],
                },
              ],
            },
          },
        },
      }

      vi.mocked(graphqlRequest.request).mockResolvedValue(mockResponse)

      const result = await fetchGitHubContributions(
        'testuser',
        '2024-01-01T00:00:00.000Z',
        '2024-12-31T23:59:59.999Z',
        { Authorization: 'Bearer test-token' }
      )

      expect(result).toEqual(mockResponse)
      expect(graphqlRequest.request).toHaveBeenCalledWith(
        'https://api.github.com/graphql',
        expect.any(String),
        {
          login: 'testuser',
          from: '2024-01-01T00:00:00.000Z',
          to: '2024-12-31T23:59:59.999Z',
        },
        { Authorization: 'Bearer test-token' }
      )
    })
  })

  describe('getMonthlyContributions', () => {
    beforeEach(() => {
      process.env.GITHUB_TOKEN = 'test-token'
    })

    it('正常にコントリビューションデータを取得して集計する', async () => {
      const mockResponse: GitHubResponse = {
        user: {
          contributionsCollection: {
            contributionCalendar: {
              weeks: [
                {
                  contributionDays: [
                    { date: '2024-01-01', contributionCount: 5 },
                    { date: '2024-01-15', contributionCount: 3 },
                  ],
                },
                {
                  contributionDays: [
                    { date: '2024-02-01', contributionCount: 10 },
                  ],
                },
              ],
            },
          },
        },
      }

      vi.mocked(graphqlRequest.request).mockResolvedValue(mockResponse)

      const result = await getMonthlyContributions('testuser')

      expect(result).toEqual({
        '2024-01': 8,
        '2024-02': 10,
      })
    })

    it('デフォルトユーザーを使用する', async () => {
      const mockResponse: GitHubResponse = {
        user: {
          contributionsCollection: {
            contributionCalendar: {
              weeks: [],
            },
          },
        },
      }

      vi.mocked(graphqlRequest.request).mockResolvedValue(mockResponse)

      await getMonthlyContributions()

      expect(graphqlRequest.request).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(String),
        expect.objectContaining({
          login: 'gs223gs',
        }),
        expect.any(Object)
      )
    })

    it('APIエラー時は空のオブジェクトを返す', async () => {
      vi.mocked(graphqlRequest.request).mockRejectedValue(new Error('API Error'))

      const result = await getMonthlyContributions('testuser')

      expect(result).toEqual({})
    })

    it('403エラーの場合は空のオブジェクトを返す', async () => {
      vi.mocked(graphqlRequest.request).mockRejectedValue(new Error('403 Forbidden'))

      const result = await getMonthlyContributions('testuser')

      expect(result).toEqual({})
    })

    it('トークンがない場合はエラーになる', async () => {
      delete process.env.GITHUB_TOKEN

      const result = await getMonthlyContributions('testuser')

      expect(result).toEqual({})
    })
  })
})