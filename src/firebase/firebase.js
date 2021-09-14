import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const config = {
  apiKey: "AIzaSyDciZ8f0y5addthWr6uMJv1xD6-MPpqnVQ",
  authDomain: "cloth-db-dfed1.firebaseapp.com",
  projectId: "cloth-db-dfed1",
  storageBucket: "cloth-db-dfed1.appspot.com",
  messagingSenderId: "100540848815",
  appId: "1:100540848815:web:8bc8e7317309827ce0d25a"
};
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try{
        await userRef.set({
         displayName, 
         email,
         createdAt,
         ...additionalData})
       }catch (error) {
         console.log('error creating user',error.message);
       }
      }
      return userRef;
    }



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;