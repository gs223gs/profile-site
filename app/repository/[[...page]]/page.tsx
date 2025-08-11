import { getUserRepositories } from "@/app/actions/getUserRepositories";
import RepositoryList from "@/components/repository/RepositoryList";
import RepositoryPagination from "@/components/repository/RepositoryPagination";
import RepositoryLegend from "@/components/repository/RepositoryLegend";
import { PageDescription } from "@/components/ui/page-description";
import { REPOSITORIES_PER_PAGE } from "@/constants/github";
import { notFound } from "next/navigation";

export const runtime = "edge";
export const revalidate = 3600;

type PageProps = {
  params: Promise<{ page?: string[] }>;
  searchParams: Promise<{ cursor?: string }>;
};

export default async function RepositoryPage({ params, searchParams }: PageProps) {
  const { page } = await params;
  const { cursor } = await searchParams;
  
  const currentPage = page && page[0] ? Number(page[0]) : 1;
  
  if (isNaN(currentPage) || currentPage < 1) {
    notFound();
  }
  
  const data = await getUserRepositories({ after: currentPage > 1 ? cursor : undefined });
  const totalPages = Math.ceil(data.totalCount / REPOSITORIES_PER_PAGE);
  
  if (currentPage > totalPages) {
    notFound();
  }

  return (
    <div className="p-8">
      <PageDescription>私のGitHubリポジトリ一覧です。</PageDescription>
      <RepositoryLegend />
      
      <div className="mb-6">
        <RepositoryPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          pageInfo={data.pageInfo}
        />
      </div>
      
      <RepositoryList repositories={data.repositories} />
      
      <div className="mt-8">
        <RepositoryPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          pageInfo={data.pageInfo}
        />
      </div>
    </div>
  );
}