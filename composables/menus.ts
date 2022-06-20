export function useMenus() {
  const menus = useState('menu', () => [
    {
      name: 'Processing Log',
      path: '/processing-log',
    },
    {
      name: 'DataMap',
      path: '/datamap',
    },
    {
      name: 'Analysis',
      path: '/analysis',
    },
    {
      name: 'Visibility',
      path: '/visibility',
    },
  ])

  return {
    menus,
  }
}
