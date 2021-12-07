import AppActions from "../Actions/AppActions";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  setDoc,
  doc,
  onSnapshot,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { put, delay } from "redux-saga/effects";
// import "firebase/auth";

export default class AppMiddleware {
  static *Signin({ payload }) {
    try {
      const { email, pass } = payload;
      const res = yield signInWithEmailAndPassword(getAuth(), email, pass);
      const { uid } = res.user;

      const getUserData = doc(getFirestore(), "Users", uid);
      const docSnap = yield getDoc(getUserData);

      if (docSnap.exists()) {
        const userInfo = docSnap.data();
        localStorage.setItem("userInfo", JSON.stringify({ userInfo }));
        yield put(
          AppActions.Signin_Success({
            userInfo,
          })
        );
      } else {
        console.log("data not found");
      }
    } catch (error) {
      console.log("Sign In Try Error Message --->", error.message);
    }
  }

  static *SignUp({ payload }) {
    console.log('Signup Middleware -------> ', payload)
    const db = getFirestore();
    // try {
    //   const {
    //     role,
    //     name,
    //     email,
    //     pass,
    //     phone,
    //     institute,
    //     cgpa,
    //     qualification,
    //     address,
    //   } = payload;
    //   const res = yield createUserWithEmailAndPassword(getAuth(), email, pass);
    //   const { uid } = res.user;

    //   const docRef = yield setDoc(doc(db, "Users", uid), {
    //     role,
    //     name,
    //     email,
    //     phone,
    //     uid,
    //     institute,
    //     cgpa,
    //     qualification,
    //   });
    // } catch (e) {
    //   console.log("error", e);
    // }
  }

  static *Signout() {
    const auth = getAuth();
    try {
      const logOut = yield signOut(auth);
      localStorage.removeItem("userInfo");
      console.log('Logout Succssfully')
      yield put(AppActions.Signout_Success({}));
    } catch (error) {
      console.log("Signout Catch Error =====> ", error);
    }
  }
}
