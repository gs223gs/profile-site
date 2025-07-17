import { Card, CardContent } from "@/components/ui/card";
import { CatchPhrase } from "@/components/hero/CatchPhrase";
import { SelfIntroduction } from "@/components/hero/SelfIntroduction";
import { TechStack } from "@/components/hero/TechStack";
import { GitHubContribution } from "@/components/hero/GitHubContribution";
import { SwiperGallery } from "@/components/hero/SwiperGallery";
import { profileImages } from "@/types/image";

export default function Home() {
  return (
    <div className="p-4 md:p-8 m-2 md:m-3 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* 写真スライドショー - 正方形 */}
        <div className="lg:col-span-1">
          <Card className="aspect-square">
            <CardContent className="p-6 h-full">
              <SwiperGallery images={profileImages} />
            </CardContent>
          </Card>
        </div>

        {/* 右側のコンテナ: 技術スタックとキャッチコピー */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* 技術スタック */}
          <Card className="h-full">
            <CardContent className="p-6">
              <TechStack />
            </CardContent>
          </Card>

          {/* キャッチコピー */}
          <Card className="h-full">
            <CardContent className="p-6">
              <CatchPhrase />
            </CardContent>
          </Card>
        </div>

        {/* 自己紹介 */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <SelfIntroduction />
            </CardContent>
          </Card>
        </div>

        {/* GitHubコントリビュートグラフ */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <GitHubContribution />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}