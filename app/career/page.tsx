import { CareerList } from "@/components/career/CareerList";

export default function CareerPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <p className="text-gray-600 text-center mb-8">
        これまでの学習・就業経歴です。タグで絞り込み表示できます。
      </p>
      <CareerList />
    </div>
  );
}