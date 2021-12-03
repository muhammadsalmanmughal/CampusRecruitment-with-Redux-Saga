import AppActions from "../Actions/AppActions";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
import { initializeApp } from "firebase/app";
import { put, delay } from "redux-saga/effects";
// import "firebase/auth";

export default class AppMiddleware {
  static *Signin({ payload }) {
    // const auth = getAuth();
    // console.log('Parmas------>',params)
    console.log("App middle ware Sign in console");

    try {
      const { email, pass, role } = payload;
      console.log(
        "console before signIn method with email and pass",
        email,
        pass
      );
      const res = yield signInWithEmailAndPassword(getAuth(), email, pass);
      const { uid } = res.user;

      const getUserData = doc(getFirestore(), "Users", uid);
      const docSnap = yield getDoc(getUserData);


      if (docSnap.exists()) {

        console.log("if docs =====> ", docSnap.data());

        const userInfo = docSnap.data();
        localStorage.setItem("userInfo", JSON.stringify({ userInfo }));
        yield put(
          AppActions.Signin_Success({
            userInfo
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
    const db = getFirestore();
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
      const res = yield createUserWithEmailAndPassword(getAuth(), email, pass);
      const { uid } = res.user;

      const docRef = yield setDoc(doc(db, "Users", uid), {
        role,
        name,
        email,
        phone,
        uid,
        institute,
        cgpa,
        qualification,
      });
    } catch (e) {
      console.log("error", e);
    }
  }
}
