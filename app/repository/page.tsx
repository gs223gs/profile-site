import { getUserRepositories } from '@/app/actions/getUserRepositories';
import RepositoryPageClient from '@/components/repository/RepositoryPageClient';
import RepositoryLegend from '@/components/repository/RepositoryLegend';
import { PageDescription } from '@/components/ui/page-description';

export default async function RepositoryPage() {
  const initialData = await getUserRepositories();

  return (
    <div className="p-8">
      <PageDescription>
        現在学習中・活用中の技術スタック一覧です。アイコンをクリックすると詳細が表示されます。
      </PageDescription>
      <RepositoryLegend />
      <RepositoryPageClient initialData={initialData} />
    </div>
  );
}