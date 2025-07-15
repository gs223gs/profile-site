import Link from "next/link";
import ContributionBar from "./ContributionBar";
import { getMonthlyContributions } from "@/app/actions/githubApiFetch";

export const GitHubContribution = async () => {
  const monthly = await getMonthlyContributions().catch((error) => {
    console.error("Failed to fetch GitHub contributions:", error);
    return {};
  });

  return (
    <Link
      href="https://github.com/tm"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex items-center justify-center h-full">
        <ContributionBar monthly={monthly} />
      </div>
    </Link>
  );
};
