export default function RepositoryLegend() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 p-4 ">
      <div className="flex items-center gap-2 text-sm">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span className="text-muted-foreground">コミット数</span>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-muted-foreground">PullRequest数</span>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <span className="text-muted-foreground">Issue数</span>
      </div>
    </div>
  );
}