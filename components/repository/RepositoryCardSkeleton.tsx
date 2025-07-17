import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function RepositoryCardSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Skeleton className="w-8 h-8 rounded-md" />
          <div className="flex-1 min-w-0">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Skeleton className="w-3 h-3 rounded-full" />
            <Skeleton className="h-4 w-6" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="w-3 h-3 rounded-full" />
            <Skeleton className="h-4 w-6" />
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="w-3 h-3 rounded-full" />
            <Skeleton className="h-4 w-6" />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-24" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-3 w-8" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}