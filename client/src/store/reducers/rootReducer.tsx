import {combineReducers} from 'redux';
import {userReducer} from './userReducer';

export const rootReducer = combineReducers({
  userReducer
})

export type RootReducer = ReturnType<typeof rootReducer>