import { BorderedContainer } from '@/components/ui/bordered-container'
import { CatchPhrase } from '@/components/hero/CatchPhrase'
import { SelfIntroduction } from '@/components/hero/SelfIntroduction'
import { TechStack } from '@/components/hero/TechStack'
import { GitHubContribution } from '@/components/hero/GitHubContribution'
import { SwiperGallery } from '@/components/hero/SwiperGallery'
import { profileImages } from '@/types/image'
import { FullScreenPage } from '@/components/layout/FullScreenPage'

export default function HeroPage() {
  return (
    <FullScreenPage>
      <div className="p-8 m-3 h-full">
        <div className="grid grid-cols-9 grid-rows-16 gap-4 h-full">
        {/* 🔳 写真スライドショー - 左上 5x4 */}
        <div className="col-span-4 row-span-8">
          <BorderedContainer>
            <SwiperGallery images={profileImages} />
          </BorderedContainer>
        </div>

        {/* 🔸 キャッチコピー - 右上 4x2 */}
        <div className="col-span-5 row-span-2">
          <BorderedContainer className="h-full">
            <CatchPhrase />
          </BorderedContainer>
        </div>

        {/* 🔹 自己紹介 - 右中 4x3 */}
        <div className="col-span-5 row-span-8">
          <BorderedContainer>
            <SelfIntroduction />
          </BorderedContainer>
        </div>

        {/* ▫️ 技術スタック - 左下 5x1 */}
        <div className="col-span-4 row-span-3">
          <BorderedContainer>
            <TechStack />
          </BorderedContainer>
        </div>

        {/* 🔲 GitHubコントリビュートグラフ - 下部 9x2 */}
        <div className="col-span-9 row-span-1">
          <BorderedContainer>
            <GitHubContribution />
          </BorderedContainer>
        </div>
      </div>
    </div>
    </FullScreenPage>
  )
}