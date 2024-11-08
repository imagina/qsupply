
export default {
  products: {
    permission: 'isupply.products.manage',
    activated: true,
    authenticated: true,
    path: '/supply/products/index',
    name: 'qsupply.admin.products',
    crud : import('modules/qsupply/_crud/products'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'isupply.cms.sidebar.adminProducts',
    icon: 'fa-light fa-diamond-exclamation',
    subHeader: {
        refresh: true,
    }
  }  
}
