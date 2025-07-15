'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const ReactECharts = dynamic(() => import('echarts-for-react'), { ssr: false });

type Props = { monthly: Record<string, number> };

export default function ContributionBar({ monthly }: Props) {
  const [labels, values] = useMemo(() => {
    const pairs = Object.entries(monthly).sort();   // 昇順
    return [pairs.map(([m]) => m), pairs.map(([, v]) => v)];
  }, [monthly]);

  const option = useMemo(() => ({
    tooltip: { trigger: 'axis' },
    grid: { top: 16, left: 32, right: 24, bottom: 40 },
    xAxis: { type: 'category', data: labels },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: values, animationDuration: 600 }],
  }), [labels, values]);

  return (
    <div className="w-full h-full">
      <ReactECharts 
        option={option} 
        style={{ 
          height: '100%', 
          width: '100%' 
        }} 
      />
    </div>
  );
}
