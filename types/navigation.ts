export const routes = [
  { name: 'Hero', href: '/hero', label: 'ホーム' },
  { name: 'NowTraining', href: '/nowtraining', label: '学習中' },
  { name: 'Graph', href: '/graph', label: 'グラフ' },
  { name: 'Career', href: '/career', label: 'キャリア' },
  { name: 'Contact', href: '/contact', label: 'お問い合わせ' }
] as const

export type Route = typeof routes[number]
export type RouteName = Route['name']
export type RouteHref = Route['href']