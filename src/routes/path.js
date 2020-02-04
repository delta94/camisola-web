export default {
  HOME: '/',
  PORTUGAL: '/portugal',
  BENFICA: '/benfica',
  PORTO: '/porto',
  SPORTING: '/sporting',
  OUTROS: '/outros',
  CRIANCAS: '/criancas',
  ACCOUNT: '/account',
  ADMIN: '/admin',
  CREATE_PRODUCT: '/admin/new-product',
  SETTINGS: '/admin/settings',
  PRODUCT_DETAILS: '/products/:id',
  ORDER_SUMMARY: (orderId) => `/orders/${orderId}`,
  CART: '/cart',
  ORDER_RECEIVED: '/order-received',
};
