import RepositoryCard from "@/components/repository/RepositoryCard";
import type { Repository } from "@/types/repository";

type RepositoryListProps = {
  repositories: Repository[];
};

export default function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
}