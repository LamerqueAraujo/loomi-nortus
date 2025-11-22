export type SidebarPage =
  | 'dashboard'
  | 'tickets'
  | 'plans'
  | 'customer-360'
  | 'chat'

export type NavItem = {
  page: SidebarPage
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
}
