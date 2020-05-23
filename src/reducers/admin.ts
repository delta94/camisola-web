import { FETCH_ORDERS_FULFILLED } from '../actions';
import { IAdminState } from '../types';

const INITIAL_STATE: IAdminState = {
  orders: [],
};

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case FETCH_ORDERS_FULFILLED:
      return { ...state, orders: payload };
    default:
      return state;
  }
};
