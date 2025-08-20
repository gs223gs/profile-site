import { Card, CardContent } from "@/components/ui/card";
import { CatchPhrase } from "@/components/hero/CatchPhrase";
import { SelfIntroduction } from "@/components/hero/SelfIntroduction";
import { TechStack } from "@/components/hero/TechStack";
import GitHubContribution from "@/components/hero/GitHubContribution";
import { SwiperGallery } from "@/components/hero/SwiperGallery";
import { LatestCareer } from "@/components/hero/LatestCareer";
import { profileImages } from "@/types/image";
import Link from "next/link";
import { fetchLaprasProfile } from "./actions/getLaprasUserJson";

import { LaprasScore } from "@/types/lapras";
import { ScoreCard } from "@/components/hero/ScoreCard";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const profile = await fetchLaprasProfile();

  const scoreData: LaprasScore = {
    e_score: profile.e_score,
    b_score: profile.b_score,
    i_score: profile.i_score,
  };

  return (
    <div className="m-2 p-4 h-full md:m-3 md:p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        
        {/* 写真スライドショー - 正方形 */}
        <div className="col-span-1">
          <Card className="aspect-square">
            <CardContent className="p-6 h-full">
              <SwiperGallery images={profileImages} />
            </CardContent>
          </Card>
        </div>

        {/* 右側のコンテナ: 技術スタックとキャッチコピー */}
        <div className="grid grid-cols-1 gap-4 md:col-span-1 md:grid-cols-1 lg:col-span-2 lg:grid-cols-2">
          {/* 技術スタック */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
            <Card className="flex h-full cursor-pointer items-center justify-center transition-all hover:shadow-md">
              <Link href="/nowtraining">
                <CardContent className="">
                  <TechStack />
                </CardContent>
              </Link>
            </Card>

            <Card className="flex h-full cursor-pointer items-center justify-center transition-all hover:shadow-md">
              <CardContent className="">
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Lapras Score</p>
                  <div className="flex gap-4 md:flex-row flex-col">
                    <ScoreCard type="engineer" value={scoreData.e_score} />
                    <ScoreCard type="business" value={scoreData.b_score} />
                    <ScoreCard type="influence" value={scoreData.i_score} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 最新のキャリア */}
          <Card className="block cursor-pointer transition-all hover:shadow-md">
            <Link href="/career">
              <CardContent className="">
                <LatestCareer />
              </CardContent>
            </Link>
          </Card>

          {/* キャッチコピー */}
          <Card className="flex items-center justify-center md:col-span-1 lg:col-span-2">
            <CardContent className="">
              <CatchPhrase />
            </CardContent>
          </Card>
        </div>

        {/* 自己紹介 */}
        <div className="md:col-span-2 lg:col-span-3">
          <Card>
            <CardContent className="p-6">
              <SelfIntroduction />
            </CardContent>
          </Card>
        </div>

        {/* GitHubコントリビュートグラフ */}
        <div className="md:col-span-2 lg:col-span-3">
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
