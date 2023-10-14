
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth"
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCzb5r4MJeh7MBEgdHff7z3-d6CO7ZBIlk",
  authDomain: "lumi-c103b.firebaseapp.com",
  projectId: "lumi-c103b",
  storageBucket: "lumi-c103b.appspot.com",
  messagingSenderId: "208380271950",
  appId: "1:208380271950:web:47f269caa896cdbcf3d21f"
};


initializeApp(firebaseConfig);

// Atentification
const auth = getAuth()

// FireStore
const database = getFirestore()

// Sign up with Google
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// Sign up with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

// Sign in / login with email and password
export const SignAuthInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  await signInWithEmailAndPassword(auth, email, password)
}

// create individual user data base
export const createUserDocumentFromAuth = async (UserAuth, additional = {}) => {
  const userDocRef = doc(database, "user", UserAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { email, displayName } = UserAuth
    const createAt = new Date()
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additional
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// auth stae change
export const onAuthStateChangedListiner = (callback) => onAuthStateChanged(auth, callback)

export const signOutUser = () => signOut(auth)