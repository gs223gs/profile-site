import { BorderedContainer } from "@/components/ui/bordered-container";
import { CatchPhrase } from "@/components/hero/CatchPhrase";
import { SelfIntroduction } from "@/components/hero/SelfIntroduction";
import { TechStack } from "@/components/hero/TechStack";
import { GitHubContribution } from "@/components/hero/GitHubContribution";
import { SwiperGallery } from "@/components/hero/SwiperGallery";
import { profileImages } from "@/types/image";

export default function HeroPage() {
  return (
    <div className="p-4 md:p-8 m-2 md:m-3 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 h-full">
        {/* 写真スライドショー */}
        <div className="lg:col-span-1">
          <BorderedContainer>
            <SwiperGallery images={profileImages} />
          </BorderedContainer>
        </div>

        {/* キャッチコピー */}
        <div className="lg:col-span-2">
          <BorderedContainer className="h-full">
            <CatchPhrase />
          </BorderedContainer>
        </div>

        {/* 自己紹介 */}
        <div className="lg:col-span-2">
          <BorderedContainer>
            <SelfIntroduction />
          </BorderedContainer>
        </div>

        {/* 技術スタック */}
        <div className="lg:col-span-1">
          <BorderedContainer>
            <TechStack />
          </BorderedContainer>
        </div>

        {/* GitHubコントリビュートグラフ */}
        <div className="col-span-full">
          <BorderedContainer>
            <GitHubContribution />
          </BorderedContainer>
        </div>
      </div>
    </div>
  );
}
