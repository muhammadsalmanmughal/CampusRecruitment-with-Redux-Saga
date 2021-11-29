import AppActions from "../Actions/AppActions";
// import {createUserWithEmailAndPassword} from 'firebase/auth'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { put, delay } from "redux-saga/effects";
// import "firebase/auth";

export default class AppMiddleware {
  static *Signin({ payload }) {
    // const auth = getAuth();
    // console.log('Parmas------>',params)
    // console.log('Firebase Config------>', firebase)

    try {
      const { email, pass } = payload;
      const res = yield signInWithEmailAndPassword(getAuth(), email, pass);
      // .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      yield delay(2000);
      console.log("Sign ------>", res);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ userId: res.user.uid, email })
      );
      yield put(AppActions.Signin_Success({ userId: res.user.uid, email }));
      // ...
      // })
      // .catch((err) => {
      //   console.log('Sign In Error Message --->',err.message)
      // });
    } catch (error) {
      console.log("Sign In Try Error Message --->", error.message);
    }
  }
  static *SignUp({ payload }) {
    const db = getFirestore();

    console.log("Sign up------->", payload);
    try {
      const {
        role,
        name,
        email,
        pass,
        phone,
        institute,
        cgpa,
        qualification,
        address,
      } = payload;
      console.log("destructre from payload ----->", email, pass);
      // console.log('firebase auth---->', firebase.auth())
      const res = yield createUserWithEmailAndPassword(getAuth(), email, pass)
        .then((res) => {
          console.log("response", res);
          console.log("USER------>", res.user);
          const { uid } = res.user;

          const docRef = addDoc(collection(db, "Users"), {
            role,
            name,
            email,
            phone,
            uid,
            institute,
            cgpa,
            qualification,
            uid,
          });

          console.log("Doc Ref----->", docRef);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (e) {
      console.log("error", e);
    }
  }
}
