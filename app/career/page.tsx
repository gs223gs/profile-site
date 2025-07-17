import { CareerList } from "@/components/career/CareerList";
import { PageDescription } from "@/components/ui/page-description";

export default function CareerPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <PageDescription>
        これまでの学習・就業経歴です。タグで絞り込み表示できます。
      </PageDescription>
      <CareerList />
    </div>
  );
}