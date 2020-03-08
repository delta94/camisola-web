import { createSelector } from 'reselect';
import { IRootState } from '../../types';

const getUI = (state: IRootState) => state.ui;

const getSettings = createSelector(
  [getUI],
  (ui) => ui.settings,
);

export const isFetchingProducts = createSelector(
  [getUI],
  (ui) => ui.products.isFetchingProducts,
);

export const isFetchingSettings = createSelector(
  [getUI],
  (ui) => ui.settings.isFetchingSettings,
);

export const isUpdatingSettings = createSelector(
  [getSettings],
  (settings) => settings.isUpdatingSettings,
);

export const isSigningUp = createSelector(
  [getUI],
  (ui) => ui.auth.isSigningUp,
);

export const isSigningIn = createSelector(
  [getUI],
  (ui) => ui.auth.isSigningIn,
);

export const isResettingPassword = createSelector(
  [getUI],
  (ui) => ui.auth.isResettingPassword,
);

export const isLoginSuccess = createSelector(
  [getUI],
  (ui) => ui.auth.isSignInSuccess,
);
