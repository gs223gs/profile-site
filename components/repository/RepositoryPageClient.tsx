'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { getUserRepositories } from '@/app/actions/getUserRepositories';
import RepositoryCard from '@/components/repository/RepositoryCard';
import RepositoryCardSkeleton from '@/components/repository/RepositoryCardSkeleton';
import RepositoryPagination from '@/components/repository/RepositoryPagination';
import { 
  repositoriesAtom, 
  pageInfoAtom, 
  currentPageAtom, 
  totalCountAtom, 
  isLoadingAtom 
} from '@/atoms/repositoryAtoms';
import type { RepositoriesResponse } from '@/types/repository';

type RepositoryPageClientProps = {
  initialData: RepositoriesResponse;
};

export default function RepositoryPageClient({ initialData }: RepositoryPageClientProps) {
  const [repositories, setRepositories] = useAtom(repositoriesAtom);
  const [, setPageInfo] = useAtom(pageInfoAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [, setTotalCount] = useAtom(totalCountAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  
  const [cursors, setCursors] = useState<string[]>([]);
  const [initialized, setInitialized] = useState(false);

  // 初期データを設定
  if (!initialized) {
    setInitialized(true);
    setRepositories(initialData.repositories);
    setPageInfo(initialData.pageInfo);
    setTotalCount(initialData.totalCount);
    setCurrentPage(1);
    
    if (initialData.pageInfo.endCursor) {
      setCursors([initialData.pageInfo.endCursor]);
    }
  }

  const fetchRepositories = async (page: number) => {
    setIsLoading(true);
    try {
      const after = page > 1 ? cursors[page - 2] : null;
      const data = await getUserRepositories({ after });
      
      setRepositories(data.repositories);
      setPageInfo(data.pageInfo);
      setTotalCount(data.totalCount);
      
      if (data.pageInfo.endCursor && !cursors[page - 1]) {
        setCursors(prev => {
          const newCursors = [...prev];
          newCursors[page - 1] = data.pageInfo.endCursor!;
          return newCursors;
        });
      }
    } catch (error) {
      console.error('Failed to fetch repositories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      fetchRepositories(page);
    }
  };

  if (!initialized) {
    return (
      <>
        <div className="mb-6">
          <div className="flex justify-center">
            <div className="h-10 w-64 bg-muted rounded-md animate-pulse" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {Array.from({ length: 10 }, (_, index) => (
            <RepositoryCardSkeleton key={index} />
          ))}
        </div>
        
        <div className="mt-8">
          <div className="flex justify-center">
            <div className="h-10 w-64 bg-muted rounded-md animate-pulse" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="mb-6">
        <RepositoryPagination onPageChange={handlePageChange} />
      </div>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {Array.from({ length: 10 }, (_, index) => (
            <RepositoryCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {repositories.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
        </div>
      )}
      
      {!isLoading && (
        <div className="mt-8">
          <RepositoryPagination onPageChange={handlePageChange} />
        </div>
      )}
    </>
  );
}