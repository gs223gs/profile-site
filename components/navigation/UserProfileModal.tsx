'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
            <Avatar className="w-16 h-16">
              <AvatarImage src="/T-Miura1.jpg" alt="T.Miura" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">T.Miura</h3>
              <p className="text-sm text-gray-500">Web Developer</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-gray-700">SNS</h4>
              <div className="space-y-1">
                <a 
                  href="https://github.com/gs223gs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  GitHub
                </a>
                <a 
                  href="https://qiita.com/gs223gs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  Qiita
                </a>
                <a 
                  href="https://zenn.dev/gs223gs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  Zenn
                </a>
                <a 
                  href="https://twitter.com/gs223gs_" 
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