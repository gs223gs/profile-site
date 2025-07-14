interface BorderedContainerProps {
  children: React.ReactNode
  className?: string
}

export function BorderedContainer({ children, className }: BorderedContainerProps) {
  return (
    <div
      className={`rounded-lg border-2 border-black p-6 ${className}`}
    >
      {children}
    </div>
  )
}