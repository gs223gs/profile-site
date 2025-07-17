"use client";

import { useSetAtom } from "jotai";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sidebarToggleAtom } from "@/atoms/sidebarAtoms";
import { routes } from "@/types/navigation";
import NavigationItemCollapsed from "./NavigationItemCollapsed";
import { UserProfileModal } from "./UserProfileModal";
import { usePathname } from "next/navigation";

export function SidebarCollapsed() {
  const toggle = useSetAtom(sidebarToggleAtom);
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-full w-16 bg-white border-r border-gray-200 flex flex-col z-40">
      {/* Header */}
      <div className="border-b border-gray-200 flex items-center p-3 justify-center">
        <Button
          onClick={toggle}
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          aria-label="サイドバーを開く"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 p-2">
        {routes.map((route) => (
          <NavigationItemCollapsed
            key={route.href}
            route={route}
            isActive={pathname === route.href}
          />
        ))}
      </div>

      {/* Account Section */}
      <div className="border-t border-gray-200 p-2">
        <UserProfileModal>
          <div className="flex items-center justify-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/T-Miura1.jpg" alt="T.Miura" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
          </div>
        </UserProfileModal>
      </div>
    </nav>
  );
}
