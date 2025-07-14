import NavigationList from './NavigationList'
import { UserProfileModal } from './UserProfileModal'

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">T.Miura</h1>
      </div>

      {/* Navigation Links */}
      <NavigationList />

      {/* Account Section */}
      <div className="p-4 border-t border-gray-200">
        <UserProfileModal>
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">TM</span>
            </div>
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

export default Sidebar