import {IUserState, UserAction, UserActionTypes} from '../types/userTypes';

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        loading: true,
        error: null,
        users: []
      }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        // Пример:
        // ...state,
        // users: state.users.concat(action.payload)
        // users: [action.payload, ...state.users]
        // users: [...state.users, action.payload]
        loading: false,
        error: null,
        users: action.payload
      }
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
        users: []
      }
    default:
      return state
  }
}