import AppMiddleware from "../Middleware/AppMiddleware";
import { takeLatest, all } from "redux-saga/effects";

import { SIGNIN, SIGNUP, SIGNOUT } from "../Constants";

export function* Saga() {
  yield all([
    yield takeLatest(SIGNIN, AppMiddleware.Signin),
    yield takeLatest(SIGNUP, AppMiddleware.SignUp),
    yield takeLatest(SIGNOUT, AppMiddleware.Signout),
  ]);
}
