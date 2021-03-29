import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL
} from "../constants/useConstant";
import { STATES } from "mongoose";

// export const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_LOGIN_REQUEST:
//       return { isLoading: true };
//     case USER_LOGIN_SUCCESS:
//       return {
//         isLoading: false,
//         userInfo: action.payload
//       };
//     case USER_LOGIN_FAIL:
//       return {
//         isLoading: false,
//         error: action.payload
//       };
//     case USER_LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };

export const userLoginReducer = (state = { userInfo: [] }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { isLoading: true, userInfo: [] };
    case USER_LOGIN_SUCCESS:
      return { isLoading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { isLoading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = { userInfo: [] }, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { isLoading: true, userInfo: [] };
    case USER_REGISTER_SUCCESS:
      return { isLoading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, isLoading: true };
    case USER_DETAILS_SUCCESS:
      return { isLoading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
