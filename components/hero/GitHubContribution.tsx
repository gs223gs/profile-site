import ContributionBar from "./ContributionBar";
import { getMonthlyContributions } from "@/app/actions/githubApiFetch";

export const GitHubContribution = async () => {
  const monthly = await getMonthlyContributions().catch((error) => {
    console.error("Failed to fetch GitHub contributions:", error);
    return {};
  });

  return (
      <div className="flex items-center justify-center h-full">
        <ContributionBar monthly={monthly} />
      </div>
  );
};
