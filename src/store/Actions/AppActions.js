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
  SIGNOUT_FAILURE

} from "../Constants";

export default class AppActions {
  static SaveUserState(payload) {
    return {
      type: SAVE_USER_STATE,
      payload,
    };
  }
  static Signin(payload) {
    console.log("payload in action", payload);
    return {
      type: SIGNIN,
      payload,
    };
  }
  static Signin_Success(payload) {
    return {
      type: SIGNIN_SUCCESS,
      payload,
    };
  }
  static Signin_Failure() {
    return {
      type: SIGNIN_FAILURE,
    };
  }
  static SignUp(payload) {
    console.log("payload in action", payload);
    return {
      type: SIGNUP,
      payload,
    };
  }
  static SignUp_Success(payload) {
    return {
      type: SIGNIN_SUCCESS,
      payload,
    };
  }
  static SignUp_Failure() {
    return {
      type: SIGNIN_FAILURE,
    };
  }

  static Signout(payload) {
    return {
      type: SIGNOUT,
      payload
    };
  }
  static Signout_Success() {
    return {
      type: SIGNOUT_SUCCESS,
    };
  }
  static Signout_Failure() {
    return {
      type: SIGNOUT_FAILURE,
    };
  }
}
