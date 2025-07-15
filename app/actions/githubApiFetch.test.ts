import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getMonthlyContributions } from './githubApiFetch'
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


  describe('getMonthlyContributions', () => {
    beforeEach(() => {
      process.env.GITHUB_TOKEN = 'test-token'
    })

    it('正常にコントリビューションデータを取得して集計する', async () => {
      const mockResponse = {
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
      const mockResponse = {
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