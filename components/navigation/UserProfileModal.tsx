'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface UserProfileModalProps {
  children: React.ReactNode
}

export const UserProfileModal = ({ children }: UserProfileModalProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>プロフィール</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-lg font-medium text-gray-600">TM</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">T.Miura</h3>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-gray-700">Email</h4>
              <p className="text-sm text-gray-600">t.miura@example.com</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700">SNS</h4>
              <div className="space-y-1">
                <a 
                  href="https://github.com/tm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  GitHub
                </a>
                <a 
                  href="https://qiita.com/tm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  Qiita
                </a>
                <a 
                  href="https://zenn.dev/tm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  Zenn
                </a>
                <a 
                  href="https://twitter.com/tm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}