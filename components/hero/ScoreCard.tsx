type ScoreType = 'engineer' | 'business' | 'influence'

type ScoreCardProps = {
  type: ScoreType
  value: number
}

const scoreConfig = {
  engineer: {
    label: '技術力',
    gradientFrom: 'from-blue-500',
    gradientTo: 'bg-blue-500'
  },
  business: {
    label: '市場価値',
    gradientFrom: 'from-green-500',
    gradientTo: 'bg-green-500'
  },
  influence: {
    label: '影響力',
    gradientFrom: 'from-purple-500',
    gradientTo: 'bg-purple-500'
  }
} as const

export function ScoreCard({ type, value }: ScoreCardProps) {
  const config = scoreConfig[type]
  
  return (
    <div className="text-center">
      <div className={`bg-gradient-to-r ${config.gradientFrom} ${config.gradientTo} text-white p-6 rounded-xl shadow-lg`}>
        <div className="text-sm font-medium mb-2">{config.label}</div>
        <div className="text-3xl font-bold">{value.toFixed(2)}</div>
      </div>
    </div>
  )
}