import { BorderedContainer } from '@/components/ui/bordered-container'
import { CatchPhrase } from '@/components/hero/CatchPhrase'
import { SelfIntroduction } from '@/components/hero/SelfIntroduction'
import { TechStack } from '@/components/hero/TechStack'
import { GitHubContribution } from '@/components/hero/GitHubContribution'
import { SwiperGallery } from '@/components/hero/SwiperGallery'
import { profileImages } from '@/types/image'

export default function HeroPage() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-9 grid-rows-8 gap-4 h-screen">
        {/* 🔳 写真スライドショー - 左上 5x4 */}
        <div className="col-span-4 row-span-4">
          <BorderedContainer>
            <SwiperGallery images={profileImages} />
          </BorderedContainer>
        </div>

        {/* 🔸 キャッチコピー - 右上 4x2 */}
        <div className="col-span-5 row-span-1 ">
          <BorderedContainer>
            <CatchPhrase />
          </BorderedContainer>
        </div>

        {/* 🔹 自己紹介 - 右中 4x3 */}
        <div className="col-span-5 row-span-4">
          <BorderedContainer>
            <SelfIntroduction />
          </BorderedContainer>
        </div>

        {/* ▫️ 技術スタック - 左下 5x1 */}
        <div className="col-span-4 row-span-2">
          <BorderedContainer>
            <TechStack />
          </BorderedContainer>
        </div>

        {/* 🔲 GitHubコントリビュートグラフ - 下部 9x2 */}
        <div className="col-span-9 row-span-2">
          <BorderedContainer>
            <GitHubContribution />
          </BorderedContainer>
        </div>
      </div>
    </div>
  )
}