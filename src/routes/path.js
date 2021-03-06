export default {
  HOME: '/',
  PORTUGAL: '/portugal',
  BENFICA: '/benfica',
  PORTO: '/porto',
  SPORTING: '/sporting',
  CRIANCAS: '/criancas',
  OUTROS: '/outros',
  ACCOUNT: '/account',
  ADMIN: '/admin',
  ADMIN_PRODUCTS: '/admin/products',
  CREATE_PRODUCT: '/admin/new-product',
  ADMIN_EDIT_PRODUCT: '/admin/edit-product/:id',
  SETTINGS: '/admin/settings',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_IMAGES: '/admin/images',
  PRODUCT_DETAILS: '/products/:id',
  ORDER_SUMMARY: (orderId) => `/orders/${orderId}`,
  CART: '/cart',
  ORDER_RECEIVED: '/order-received',
  LOGIN: '/login',
};
