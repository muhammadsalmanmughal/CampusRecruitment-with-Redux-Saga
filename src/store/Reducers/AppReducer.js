import {
  SAVE_USER_STATE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
} from "../Constants";

const initialState = {
  user: {},
  loader: false,
};

export default function AppReducer(
  state = JSON.parse(JSON.stringify(initialState)),
  action
) {
  switch (action.type) {
    case SAVE_USER_STATE:
      console.log("SAVE_USER_STATE");
      state = {
        ...state,
        user: action.payload,
      };
      break;
    case SIGNIN:
      console.log("signin");
      state = {
        ...state,
        loader: true,
        user: action.payload,
      };
      break;
    // return {...state}
    case SIGNIN_SUCCESS:
      state = {
        ...state,
        user: action.payload,
        loader: false,
      };
      break;
    // return {...state}

    case SIGNUP:
      state = {
        ...state,
        user: action.payload,
        loader: true,
      };
      break;

    case SIGNOUT:
      state = {
        loader: true,
        user: {},
      };
      break;
    case SIGNOUT_SUCCESS:
      state = {
        ...state,
        loader: false,
      };
      break;
    default:
      break;
  }
  return state;
}
