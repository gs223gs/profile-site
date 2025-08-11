import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type RepositoryPaginationProps = {
  currentPage: number;
  totalPages: number;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
};

export default function RepositoryPagination({
  currentPage,
  totalPages,
  pageInfo,
}: RepositoryPaginationProps) {
  const createPageUrl = (page: number, cursor?: string | null) => {
    if (page === 1) {
      return "/repository";
    }
    
    const url = `/repository/${page}`;
    if (cursor) {
      return `${url}?cursor=${cursor}`;
    }
    return url;
  };

  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;
    const halfShow = Math.floor(showPages / 2);
    
    const initialStartPage = Math.max(1, currentPage - halfShow);
    const endPage = Math.min(totalPages, initialStartPage + showPages - 1);
    
    const startPage = endPage - initialStartPage < showPages - 1
      ? Math.max(1, endPage - showPages + 1)
      : initialStartPage;
    
    for (const i of Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx)) {
      pages.push(i);
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link href={createPageUrl(currentPage - 1)}>
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
      )}
      
      {currentPage > 2 && (
        <>
          <Link href={createPageUrl(1)}>
            <Button variant="outline" size="sm">1</Button>
          </Link>
          {currentPage > 3 && <span className="px-2">...</span>}
        </>
      )}
      
      {getPageNumbers().map((page) => {
        const isCurrentPage = page === currentPage;
        const nextPageCursor = page === currentPage + 1 ? pageInfo.endCursor : null;
        
        return isCurrentPage ? (
          <Button
            key={page}
            variant="default"
            size="sm"
            disabled
          >
            {page}
          </Button>
        ) : (
          <Link key={page} href={createPageUrl(page, nextPageCursor)}>
            <Button variant="outline" size="sm">
              {page}
            </Button>
          </Link>
        );
      })}
      
      {currentPage < totalPages - 1 && (
        <>
          {currentPage < totalPages - 2 && <span className="px-2">...</span>}
          <Link href={createPageUrl(totalPages)}>
            <Button variant="outline" size="sm">{totalPages}</Button>
          </Link>
        </>
      )}
      
      {pageInfo.hasNextPage && currentPage < totalPages && (
        <Link href={createPageUrl(currentPage + 1, pageInfo.endCursor)}>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}