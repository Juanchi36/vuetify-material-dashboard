/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    // Relative to /src/views
    view: 'Home'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  ,
  {
    path: '/config',
    name: 'Config',
    view: 'Config'
  },
  {
    path: '/empresas',
    name: 'Empresas',
    view: 'Empresas'
  },
  {
    path: '/salas',
    name: 'Salas',
    view: 'Salas'
  },
  {
    path: '/grupos',
    name: 'Grupos',
    view: 'Grupos'
  },
  {
    path: '/egm',
    name: 'EGM',
    view: 'EGM'
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    view: 'Usuarios'
  },
  {
    path: '/reporte-contadores',
    name: 'Reporte de Contadores',
    view: 'ReporteContadores'
  },
  {
    path: '/reporte-eventos',
    name: 'Reporte de Eventos',
    view: 'ReporteEventos'
  },
  {
    path: '/registro-egm',
    name: 'Reporte de Modificaciones en EGMs',
    view: 'CambiosEgm'
  },
  {
    path: '/crud',
    view: 'Crud'
  },
  {
    path: '/drag',
    view: 'Drag'
  },
  {
    path: '/drag2',
    view: 'Drag2'
  },
  // {
  //   path: '/maps',
  //   view: 'Maps'
  // },
  // {
  //   path: '/notifications',
  //   view: 'Notifications'
  // },
  // {
  //   path: '/upgrade',
  //   name: 'Upgrade to PRO',
  //   view: 'Upgrade'
  // }
]
