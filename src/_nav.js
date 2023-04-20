export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Dịch Vụ',
  },
  {
    component: 'CNavItem',
    name: 'Xe',
    to: '/car',
    icon: 'cil-star',
  },
  {
    component: 'CNavItem',
    name: 'Trang Trí Gia Tiên',
    to: '/ancestral-decoration',
    icon: 'cil-calculator',
  },
  {
    component: 'CNavItem',
    name: 'Thiết Bị',
    to: '/device',
    icon: 'cil-star',
  },
  {
    component: 'CNavItem',
    name: 'Lịch',
    to: '/booking',
    icon: 'cil-calendar',
  },
]
