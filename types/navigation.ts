import { Home, BookOpen, BarChart, Briefcase, Mail, LucideIcon } from 'lucide-react'

export const routes = [
  { name: 'Hero', href: '/hero', label: 'ホーム', icon: Home },
  { name: 'NowTraining', href: '/nowtraining', label: '学習中', icon: BookOpen },
  { name: 'Graph', href: '/graph', label: 'グラフ', icon: BarChart },
  { name: 'Career', href: '/career', label: 'キャリア', icon: Briefcase },
  { name: 'Contact', href: '/contact', label: 'お問い合わせ', icon: Mail }
] as const

export type Route = typeof routes[number] & { icon: LucideIcon }
export type RouteName = Route['name']
export type RouteHref = Route['href']