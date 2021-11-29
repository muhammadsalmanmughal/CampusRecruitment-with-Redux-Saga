import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from "../Constants";

const initialState = {
  user: {},
  loader: false,
};

export default function AppReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case SIGNIN:
      console.log("signin");
      state = {
        ...state,
        loader: true,
        email: action.payload.email,
        pass: action.payload.pass,
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
    default:
      break;
  }
  return state;
}
