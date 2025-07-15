'use client'

import { useAtom, useSetAtom } from 'jotai'
import { Menu, X } from 'lucide-react'
import NavigationList from './NavigationList'
import { UserProfileModal } from './UserProfileModal'
import { Button } from '@/components/ui/button'
import { sidebarOpenAtom, sidebarToggleAtom } from '@/atoms/sidebarAtoms'

const Sidebar = () => {
  const [isOpen] = useAtom(sidebarOpenAtom)
  const toggle = useSetAtom(sidebarToggleAtom)

  return (
    <>
      {/* Sidebar */}
      <nav 
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        {/* Header */}
        <div className={`border-b border-gray-200 flex items-center ${isOpen ? 'p-6 justify-between' : 'p-4 justify-center'}`}>
          {isOpen && <h1 className="text-2xl font-bold text-gray-900">T.Miura</h1>}
          <Button
            onClick={toggle}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            aria-label={isOpen ? 'サイドバーを閉じる' : 'サイドバーを開く'}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation Links */}
        <NavigationList />

        {/* Account Section */}
        <div className={`border-t border-gray-200 ${isOpen ? 'p-4' : 'p-2'}`}>
          <UserProfileModal>
            <div className={`flex items-center rounded-lg hover:bg-gray-100 cursor-pointer ${
              isOpen ? 'space-x-3 p-3' : 'justify-center p-3'
            }`}>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">TM</span>
              </div>
              {isOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">T.Miura</p>
                  <p className="text-xs text-gray-500 truncate">プロフィール</p>
                </div>
              )}
            </div>
          </UserProfileModal>
        </div>
      </nav>

    </>
  )
}

export default Sidebar