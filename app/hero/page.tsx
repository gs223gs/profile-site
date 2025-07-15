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
        {/* 🔳 写真スライドショー - 左上 */}
        <div className="col-span-4 row-span-10 col-start-1 row-start-1">
          <BorderedContainer>
            <SwiperGallery images={profileImages} />
          </BorderedContainer>
        </div>

        {/* 🔸 キャッチコピー - 右上 */}
        <div className="col-span-5 row-span-3 col-start-5 row-start-1">
          <BorderedContainer className="h-full">
            <CatchPhrase />
          </BorderedContainer>
        </div>

        {/* 🔹 自己紹介 - 右中 */}
        <div className="col-span-5 row-span-10 col-start-5 row-start-4">
          <BorderedContainer>
            <SelfIntroduction />
          </BorderedContainer>
        </div>

        {/* ▫️ 技術スタック - 左下 */}
        <div className="col-span-4 row-span-3 col-start-1 row-start-11">
          <BorderedContainer>
            <TechStack />
          </BorderedContainer>
        </div>

        {/* 🔲 GitHubコントリビュートグラフ - 下部 */}
        <div className="col-span-9 row-span-2 col-start-1 row-start-14">
          <BorderedContainer>
            <GitHubContribution />
          </BorderedContainer>
        </div>
      </div>
    </div>
    </FullScreenPage>
  )
}