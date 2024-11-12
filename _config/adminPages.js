
export default {
  products: {
    //permission: 'isupply.products.manage',
    activated: true,
    authenticated: true,
    path: '/supply/products/index',
    name: 'qsupply.admin.products',
    page: () => import('modules/qsupply/_pages/products'),
    layout: () => import('layouts/master.vue'),
    title: 'isupply.cms.sidebar.adminProducts',
    icon: 'fa-light fa-boxes-stacked',
    subHeader: {
        refresh: true,
    }
  },

  orders: {
    //permission: 'isupply.products.manage',
    activated: true,
    authenticated: true,
    path: '/supply/products/index',
    name: 'qsupply.admin.orders',
    page: () => import('modules/qsupply/_pages/orders'),
    layout: () => import('layouts/master.vue'),
    title: 'isupply.cms.sidebar.adminOrders',    
    icon: 'fa-light fa-receipt',
    subHeader: {
        refresh: true,
    }
  }
} 


