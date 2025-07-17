'use client'

import { useSetAtom } from 'jotai'
import { X } from 'lucide-react'
import NavigationList from './NavigationList'
import { UserProfileModal } from './UserProfileModal'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { sidebarToggleAtom } from '@/atoms/sidebarAtoms'

export function SidebarExpanded() {
  const toggle = useSetAtom(sidebarToggleAtom)

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-40">
      {/* Header */}
      <div className="border-b border-gray-200 flex items-center p-6 justify-between">
        <h1 className="text-2xl font-bold text-gray-900">T.Miura</h1>
        <Button
          onClick={toggle}
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          aria-label="サイドバーを閉じる"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation Links */}
      <NavigationList />

      {/* Account Section */}
      <div className="border-t border-gray-200 p-4">
        <UserProfileModal>
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/T-Miura1.jpg" alt="T.Miura" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">T.Miura</p>
              <p className="text-xs text-gray-500 truncate">プロフィール</p>
            </div>
          </div>
        </UserProfileModal>
      </div>
    </nav>
  )
}