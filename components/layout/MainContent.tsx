
import { SidebarTrigger } from "@/components/ui/sidebar"

interface MainContentProps {
  children: React.ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="fixed inset-0 w-full h-full overflow-auto">
      <div className="p-4">
        <SidebarTrigger />
      </div>
      {children}
    </main>
  )
}