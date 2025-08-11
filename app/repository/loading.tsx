import { PageDescription } from "@/components/ui/page-description";
import RepositoryLegend from "@/components/repository/RepositoryLegend";
import RepositoryCardSkeleton from "@/components/repository/RepositoryCardSkeleton";

export default function Loading() {
  return (
    <div className="p-8">
      <PageDescription>私のGitHubリポジトリ一覧です。</PageDescription>
      <RepositoryLegend />
      
      <div className="mb-6">
        <div className="flex justify-center">
          <div className="h-10 w-96 bg-muted rounded-md animate-pulse" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {Array.from({ length: 10 }, (_, index) => (
          <RepositoryCardSkeleton key={index} />
        ))}
      </div>
      
      <div className="mt-8">
        <div className="flex justify-center">
          <div className="h-10 w-96 bg-muted rounded-md animate-pulse" />
        </div>
      </div>
    </div>
  );
}