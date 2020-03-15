/* eslint-disable no-underscore-dangle */
const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const _REJECTED = '_REJECTED';

// Settings
export const FETCH_SETTINGS = 'FETCH_SETTINGS';
export const FETCH_SETTINGS_PENDING = FETCH_SETTINGS + _PENDING;
export const FETCH_SETTINGS_FULFILLED = FETCH_SETTINGS + _FULFILLED;
export const FETCH_SETTINGS_REJECTED = FETCH_SETTINGS + _REJECTED;

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const UPDATE_SETTINGS_PENDING = UPDATE_SETTINGS + _PENDING;
export const UPDATE_SETTINGS_FULFILLED = UPDATE_SETTINGS + _FULFILLED;
export const UPDATE_SETTINGS_REJECTED = UPDATE_SETTINGS + _REJECTED;

// PRODUCT
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_PENDING = FETCH_PRODUCTS + _PENDING;
export const FETCH_PRODUCTS_FULFILLED = FETCH_PRODUCTS + _FULFILLED;
export const FETCH_PRODUCTS_REJECTED = FETCH_PRODUCTS + _REJECTED;

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_PENDING = CREATE_PRODUCT + _PENDING;
export const CREATE_PRODUCT_FULFILLED = CREATE_PRODUCT + _FULFILLED;
export const CREATE_PRODUCT_REJECTED = CREATE_PRODUCT + _REJECTED;

// CART
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_FULFILLED = ADD_TO_CART + _FULFILLED;
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RESET_CART = 'RESET_CART';

// ORDERS
export const PLACE_ORDER = 'PLACE_ORDER';
export const PLACE_ORDER_PENDING = PLACE_ORDER + _PENDING;
export const PLACE_ORDER_FULFILLED = PLACE_ORDER + _FULFILLED;
export const PLACE_ORDER_REJECTED = PLACE_ORDER + _REJECTED;

// AUTH
export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_PENDING = SIGN_IN + _PENDING;
export const SIGN_IN_FULFILLED = SIGN_IN + _FULFILLED;
export const SIGN_IN_REJECTED = SIGN_IN + _REJECTED;

export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_OUT_PENDING = SIGN_OUT + _PENDING;
export const SIGN_OUT_FULFILLED = SIGN_OUT + _FULFILLED;
export const SIGN_OUT_REJECTED = SIGN_OUT + _REJECTED;

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_PENDING = SIGN_UP + _PENDING;
export const SIGN_UP_FULFILLED = SIGN_UP + _FULFILLED;
export const SIGN_UP_REJECTED = SIGN_UP + _REJECTED;

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_PENDING = RESET_PASSWORD + _PENDING;
export const RESET_PASSWORD_FULFILLED = RESET_PASSWORD + _FULFILLED;
export const RESET_PASSWORD_REJECTED = RESET_PASSWORD + _REJECTED;

// Account
export const SAVE_PERSONAL_DATA = 'SAVE_PERSONAL_DATA';
export const SAVE_PERSONAL_DATA_PENDING = SAVE_PERSONAL_DATA + _PENDING;
export const SAVE_PERSONAL_DATA_FULFILLED = SAVE_PERSONAL_DATA + _FULFILLED;
export const SAVE_PERSONAL_DATA_REJECTED = SAVE_PERSONAL_DATA + _REJECTED;

// UI
