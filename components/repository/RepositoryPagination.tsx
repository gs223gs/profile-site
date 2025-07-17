'use client';

import { useAtom } from 'jotai';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { currentPageAtom, totalCountAtom, pageInfoAtom } from '@/atoms/repositoryAtoms';
import { REPOSITORIES_PER_PAGE } from '@/constants/github';

type RepositoryPaginationProps = {
  onPageChange: (page: number) => void;
};

export default function RepositoryPagination({ onPageChange }: RepositoryPaginationProps) {
  const [currentPage] = useAtom(currentPageAtom);
  const [totalCount] = useAtom(totalCountAtom);
  const [pageInfo] = useAtom(pageInfoAtom);
  
  const totalPages = Math.ceil(totalCount / REPOSITORIES_PER_PAGE);
  const hasNextPage = pageInfo?.hasNextPage ?? false;
  const hasPreviousPage = currentPage > 1;
  
  if (totalPages <= 1) return null;
  
  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      onPageChange(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (hasNextPage) {
      onPageChange(currentPage + 1);
    }
  };
  
  return (
    <div className="flex items-center justify-center gap-6">
      <Button
        variant="outline"
        size="sm"
        onClick={handlePreviousPage}
        disabled={!hasPreviousPage}
        className="flex items-center gap-2"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Page {currentPage} of {totalPages}</span>
        <span>•</span>
        <span>{totalCount} repositories</span>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handleNextPage}
        disabled={!hasNextPage}
        className="flex items-center gap-2"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}