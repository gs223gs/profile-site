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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 h-full">
        {/* 写真スライドショー */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <SwiperGallery images={profileImages} />
            </CardContent>
          </Card>
        </div>

        {/* キャッチコピー */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardContent className="p-6">
              <CatchPhrase />
            </CardContent>
          </Card>
        </div>

        {/* 自己紹介 */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <SelfIntroduction />
            </CardContent>
          </Card>
        </div>

        {/* 技術スタック */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <TechStack />
            </CardContent>
          </Card>
        </div>

        {/* GitHubコントリビュートグラフ */}
        <div className="col-span-full">
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