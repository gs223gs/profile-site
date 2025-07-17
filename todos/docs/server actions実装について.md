# Server Actions実装について

## 概要
GitHub APIを使用してリポジトリ情報を取得するServer Actionの実装方法

## ファイル構成

```
app/actions/
├── getUserRepositories.ts    # リポジトリ取得用Server Action
├── githubApiFetch.ts        # コントリビューション取得用Server Action
constants/
├── github.ts               # GitHub関連の定数
queries/
├── repositories.ts         # GraphQLクエリ
types/
├── repository.ts          # リポジトリ関連の型定義
```

## 実装手順

### 1. 定数の定義
```typescript
// constants/github.ts
export const GITHUB_ENDPOINT = 'https://api.github.com/graphql';
export const DEFAULT_GITHUB_USER = 'gs223gs';
export const REPOSITORIES_PER_PAGE = 10;
```

### 2. 型定義
```typescript
// types/repository.ts
export type Repository = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  updatedAt: string;
  // その他のフィールド...
};

export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
};

export type RepositoriesResponse = {
  repositories: Repository[];
  pageInfo: PageInfo;
  totalCount: number;
};
```

### 3. GraphQLクエリ
```typescript
// queries/repositories.ts
import { gql } from 'graphql-request';

export const GET_USER_REPOSITORIES = gql`
  query GetUserRepositories($login: String!, $first: Int!, $after: String) {
    user(login: $login) {
      repositories(
        first: $first
        after: $after
        orderBy: { field: UPDATED_AT, direction: DESC }
        ownerAffiliations: OWNER
        privacy: PUBLIC
      ) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          description
          url
          updatedAt
          # その他のフィールド...
        }
      }
    }
  }
`;
```

### 4. Server Action実装
```typescript
// app/actions/getUserRepositories.ts
'use server';

import { request } from 'graphql-request';
import type { RepositoriesResponse, GetRepositoriesParams } from '@/types/repository';
import { GITHUB_ENDPOINT, DEFAULT_GITHUB_USER, REPOSITORIES_PER_PAGE } from '@/constants/github';
import { GET_USER_REPOSITORIES } from '@/queries/repositories';

export async function getUserRepositories({
  login = DEFAULT_GITHUB_USER,
  first = REPOSITORIES_PER_PAGE,
  after = null
}: GetRepositoriesParams = {}): Promise<RepositoriesResponse> {
  // 実装...
}
```

## 設計原則

### 1. 責任の分離
- **定数**: `constants/` ディレクトリに分離
- **型定義**: `types/` ディレクトリに分離
- **クエリ**: `queries/` ディレクトリに分離
- **Server Action**: `app/actions/` ディレクトリに配置

### 2. エラーハンドリング
```typescript
try {
  const response = await request(/* ... */);
  return transformResponse(response);
} catch (error) {
  console.error('Failed to fetch repositories:', error);
  
  // 403エラーの場合、具体的なヒントを提供
  if (error instanceof Error && error.message.includes('403')) {
    console.error('GitHub Token may need these scopes: read:user, repo');
  }
  
  // エラー時はデフォルト値を返す
  return {
    repositories: [],
    pageInfo: { hasNextPage: false, /* ... */ },
    totalCount: 0
  };
}
```

### 3. セキュリティ
- 環境変数からGitHubトークンを取得
- トークンの存在確認
- 適切なヘッダー設定

```typescript
function getGitHubToken(): string {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error('GITHUB_TOKEN environment variable is not set');
  }
  return token;
}

function createHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    'User-Agent': 'NextJS-App'
  } as const;
}
```

## 環境変数設定

```bash
# .env.local
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

必要なスコープ:
- `read:user`: ユーザー情報の読み取り
- `repo`: リポジトリ情報の読み取り（プライベートリポジトリも含む場合）

## 使用方法

### Server Component
```tsx
import { getUserRepositories } from '@/app/actions/getUserRepositories';

export default async function RepositoryPage() {
  const data = await getUserRepositories();
  
  return (
    <div>
      {data.repositories.map(repo => (
        <div key={repo.id}>{repo.name}</div>
      ))}
    </div>
  );
}
```

### Client Component
```tsx
'use client';

import { useEffect, useState } from 'react';
import { getUserRepositories } from '@/app/actions/getUserRepositories';

export default function RepositoryPage() {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    getUserRepositories().then(data => {
      setRepositories(data.repositories);
    });
  }, []);
  
  return (
    // JSX...
  );
}
```

## テスト

```typescript
// app/actions/getUserRepositories.test.ts
import { describe, it, expect, vi } from 'vitest';
import { getUserRepositories } from './getUserRepositories';

describe('getUserRepositories', () => {
  it('should fetch repositories successfully', async () => {
    // テスト実装...
  });
  
  it('should handle API errors gracefully', async () => {
    // エラーケースのテスト...
  });
});
```

## 注意点

1. **APIレート制限**: GitHub APIの制限（5000回/時間）に注意
2. **型安全性**: TypeScriptの型チェックを活用
3. **エラーハンドリング**: 適切なフォールバック処理
4. **パフォーマンス**: ページネーションを活用した効率的なデータ取得