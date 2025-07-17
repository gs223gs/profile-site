import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Repository } from '@/types/repository';
import { getLanguageIcon } from '@/lib/utils/language';

type RepositoryCardProps = {
  repository: Repository;
};

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  const languageIcon = getLanguageIcon(repository.primaryLanguage?.name || null);
  
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          {languageIcon && (
            <Image 
              src={languageIcon} 
              alt={repository.primaryLanguage?.name || 'Language'} 
              width={32}
              height={32}
              className="w-8 h-8"
            />
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold truncate">
              {repository.name}
            </CardTitle>
            {repository.primaryLanguage && (
              <Badge variant="secondary" className="mt-1 text-xs">
                {repository.primaryLanguage.name}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[2.5rem]">
          {repository.description || 'No description available'}
        </p>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-muted-foreground">
              {repository.defaultBranchRef?.target?.history?.totalCount || 0}
            </span>
          </div>
          
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-muted-foreground">
              {repository.pullRequests.totalCount}
            </span>
          </div>
          
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-muted-foreground">
              {repository.issues.totalCount}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
          <span>
            Updated: {new Date(repository.updatedAt).toLocaleDateString()}
          </span>
          <div className="flex items-center gap-2">
            <span>⭐ {repository.stargazerCount}</span>
            <span>🍴 {repository.forkCount}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}