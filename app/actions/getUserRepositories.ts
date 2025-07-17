'use server';

import { request } from 'graphql-request';
import type { RepositoriesResponse, GetRepositoriesParams, Repository } from '@/types/repository';
import { GITHUB_ENDPOINT, DEFAULT_GITHUB_USER, REPOSITORIES_PER_PAGE } from '@/constants/github';
import { GET_USER_REPOSITORIES } from '@/queries/repositories';

type GitHubGraphQLResponse = {
  user: {
    repositories: {
      totalCount: number;
      pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string | null;
        endCursor: string | null;
      };
      nodes: Repository[];
    };
  };
};

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

export async function getUserRepositories({
  login = DEFAULT_GITHUB_USER,
  first = REPOSITORIES_PER_PAGE,
  after = null
}: GetRepositoriesParams = {}): Promise<RepositoriesResponse> {
  try {
    const token = getGitHubToken();
    const headers = createHeaders(token);

    console.log('Fetching repositories:', {
      login,
      first,
      after,
      hasToken: !!token
    });

    const response = await request<GitHubGraphQLResponse>(
      GITHUB_ENDPOINT,
      GET_USER_REPOSITORIES,
      { login, first, after },
      headers
    );

    const { repositories } = response.user;

    return {
      repositories: repositories.nodes,
      pageInfo: repositories.pageInfo,
      totalCount: repositories.totalCount
    };
  } catch (error) {
    console.error('Failed to fetch repositories:', error);
    
    if (error instanceof Error && error.message.includes('403')) {
      console.error('GitHub Token may need these scopes: read:user, repo');
    }
    
    return {
      repositories: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null
      },
      totalCount: 0
    };
  }
}