import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import generalReducer from './reducer/index';

const rootReducer = combineReducers({
  general: generalReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
