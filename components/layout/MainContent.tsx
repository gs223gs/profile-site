
interface MainContentProps {
  children: React.ReactNode
}

export function MainContent({ children }: MainContentProps) {

  return (
    // <main className={isOpen ? 'ml-64' : 'ml-16'}>
    <main className="ml-16">
      {children}
    </main>
  )
}