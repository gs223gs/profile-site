"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

type Props = { monthly: Record<string, number> };

export default function ContributionBar({ monthly }: Props) {
  const [labels, values] = useMemo(() => {
    // 今月から6ヶ月前までのデータをフィルタリング
    const now = new Date();
    const sixMonthsAgo = new Date(now);
    sixMonthsAgo.setMonth(now.getMonth() - 6); // 今月を含めて6ヶ月

    const filteredPairs = Object.entries(monthly)
      .filter(([month]) => {
        const monthDate = new Date(month + "-01");
        return monthDate >= sixMonthsAgo && monthDate <= now;
      })
      .sort(); // 昇順

    // 月表示を日本語形式に変換
    const formattedLabels = filteredPairs.map(([month]) => {
      const [, monthNum] = month.split("-");
      return `${monthNum}月`;
    });

    return [formattedLabels, filteredPairs.map(([, v]) => v)];
  }, [monthly]);

  const option = useMemo(
    () => ({
      tooltip: {
        trigger: "axis",
        formatter: "{b}: {c} contributions",
      },
      grid: {
        top: 10,
        left: 40,
        right: 20,
        bottom: 30,
      },
      xAxis: {
        type: "category",
        data: labels,
        axisLabel: {
          fontSize: 12,
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          fontSize: 11,
        },
      },
      series: [
        {
          type: "bar",
          data: values,
          animationDuration: 600,
          itemStyle: {
            color: "#3b82f6", // Tailwind blue-500
          },
          barWidth: "60%",
        },
      ],
    }),
    [labels, values]
  );

  return (
    <div className="w-full h-full">
      <ReactECharts
        option={option}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}
