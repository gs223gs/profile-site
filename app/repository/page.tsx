import { getUserRepositories } from '@/app/actions/getUserRepositories';
import RepositoryPageClient from '@/components/repository/RepositoryPageClient';

export default async function RepositoryPage() {
  const initialData = await getUserRepositories();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Repository</h1>
      <RepositoryPageClient initialData={initialData} />
    </div>
  );
}