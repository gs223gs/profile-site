export type Repository = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  updatedAt: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  defaultBranchRef: {
    target: {
      history: {
        totalCount: number;
      };
    };
  } | null;
  pullRequests: {
    totalCount: number;
  };
  issues: {
    totalCount: number;
  };
  stargazerCount: number;
  forkCount: number;
  isPrivate: boolean;
  isFork: boolean;
  isArchived: boolean;
}

export type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

export type RepositoriesResponse = {
  repositories: Repository[];
  pageInfo: PageInfo;
  totalCount: number;
}

export type GetRepositoriesParams = {
  login?: string;
  first?: number;
  after?: string | null;
}