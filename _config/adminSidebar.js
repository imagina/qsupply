import pages from 'src/setup/pages'

//task
export default [
    {
      title: 'isupply.cms.sidebar.adminGroup', //store
      icon: 'fa-light fa-cash-register',
      children: [
        pages.qsupply.products, 
        pages.qsupply.orders,
        pages.qsupply.providerProducts
      ]
    },
  ]
