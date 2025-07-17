import { careers } from '@/types/career';

export const LatestCareer = () => {
  // 最新のキャリア情報を取得（最初の要素）
  const latestCareer = careers[0];
  
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">最新の動向</h3>
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-2">
          <p className="text-sm text-gray-500">{latestCareer.date}</p>
          <h4 className="text-xl font-bold">{latestCareer.title}</h4>
          {latestCareer.detail && (
            <p className="text-gray-600">{latestCareer.detail}</p>
          )}
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-500 inline-flex items-center gap-1">
        詳細はキャリアページで
        <span>→</span>
      </div>
    </div>
  );
};