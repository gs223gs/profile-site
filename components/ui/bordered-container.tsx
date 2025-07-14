interface BorderedContainerProps {
  children: React.ReactNode
}

export function BorderedContainer({ children}: BorderedContainerProps) {
  return (
    <div
      className="rounded-lg border-2 border-black p-6 "
    >
      {children}
    </div>
  )
}