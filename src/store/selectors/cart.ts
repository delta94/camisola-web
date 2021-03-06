import { createSelector } from 'reselect';
import { ICartItem, IRootState } from '../../types';
import { getShippingCost, getStampingExtraCost } from './settings';

const getCart = (state: IRootState) => state.cart;

export const selectNumberOfItems = createSelector(
  [getCart],
  (cart) => cart.items.length,
);

export const getCartItems = createSelector(
  [getCart],
  (cart) => cart.items,
);

export const showOrderCompleted = createSelector(
  [getCart],
  (cart) => cart.isOrderPlacedSuccess,
);

export const isPlacingOrder = createSelector(
  [getCart],
  (cart) => cart.isOrderPlacedLoading,
);

export const isPlacingRejected = createSelector(
  [getCart],
  (cart) => cart.isOrderPlacedFailure,
);

export const getCompletedOrderId = createSelector(
  [getCart],
  (cart) => cart.orderId,
);

const hasExtraCosts = (item: ICartItem) => item.stampingNumber || item.stampingName;

export const getCartTotal = createSelector(
  [getCart, getShippingCost, getStampingExtraCost],
  (cart, shippingCost, stampingExtraCost) => cart.items.reduce((acc, curr) => {
    const productPrice = parseFloat(String(curr.size.price));
    return hasExtraCosts(curr) ? acc + productPrice + stampingExtraCost : acc + productPrice;
  }, 0) + shippingCost,
);
