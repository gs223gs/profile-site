import { getUserRepositories } from "@/app/actions/getUserRepositories";
import RepositoryPageClient from "@/components/repository/RepositoryPageClient";
import RepositoryLegend from "@/components/repository/RepositoryLegend";
import { PageDescription } from "@/components/ui/page-description";
export const runtime = "edge";
export const revalidate = 3600;

export default async function RepositoryPage() {
  const initialData = await getUserRepositories();

  return (
    <div className="p-8">
      <PageDescription>私のGitHubリポジトリ一覧です。</PageDescription>
      <RepositoryLegend />
      <RepositoryPageClient initialData={initialData} />
    </div>
  );
}
