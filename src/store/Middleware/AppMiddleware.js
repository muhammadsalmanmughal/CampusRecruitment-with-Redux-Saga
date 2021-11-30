import AppActions from "../Actions/AppActions";
// import {createUserWithEmailAndPassword} from 'firebase/auth'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
  updateDoc
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { put, delay } from "redux-saga/effects";
// import "firebase/auth";

export default class AppMiddleware {
  static *Signin({ payload }) {
    // const auth = getAuth();
    // console.log('Parmas------>',params)
    // console.log('Firebase Config------>', firebase)

    try {
      const { email, pass, role } = payload;
      const res = yield signInWithEmailAndPassword(getAuth(), email, pass);
      // .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      yield delay(1000);
      // console.log("Sign ------>", res);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ userId: res.user.uid, email, userRole: role })
      );

      const userCollectionRef = collection(getFirestore(), "Users");
      const userData = yield getDocs(userCollectionRef);
      console.log("User Data ====> ", userData);

      const querySnapshot = yield getDocs(userCollectionRef);
      querySnapshot.forEach((doc) => {
        console.log('Doc id ====>', doc)
        // const q = query(userData, where(doc.id, "==", res.user.uid));
        console.log('Get Data by doc id =====>', doc.id, " => ", doc.data());
        // console.log("Data after query------>", q);

        // console.log('Doc Data------>', doc)
      });

      console.log('Get data fr3om firestore', userData.docs.map((doc) => ({...doc.data(), id: doc.id})))

      yield put(AppActions.Signin_Success({ userId: res.user.uid, email }));
    } catch (error) {
      console.log("Sign In Try Error Message --->", error);
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
        .then(async(res) => {
          console.log("response", res);
          console.log("USER------>", res.user);
          const { uid } = res.user;

          const docRef = await addDoc(collection(db, "Users"), {
            role,
            name,
            email,
            phone,
            uid,
            institute,
            cgpa,
            qualification,
          })
          const userDocId = doc(db,'Users', docRef.id)
          const newFileds = {uid: docRef.id}
          const updateId = updateDoc(userDocId,newFileds)
          // firebase.firestore().collection('Users').doc(uid).update({ userID: res.id })
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
