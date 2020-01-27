/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { FETCH_SETTINGS, FETCH_PRODUCTS } from '../actions/actionTypes';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(rootSaga);

// TODO: move to proper place.
store.dispatch({ type: FETCH_SETTINGS });
store.dispatch({ type: FETCH_PRODUCTS });

export default store;
