import { initializeApp } from "firebase/app";
import{ 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,setDoc

} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBPax3AOeeXLZ0Ul0GXk-A8SVck_Ho0H5c",
  authDomain: "louaa-e-com.firebaseapp.com",
  projectId: "louaa-e-com",
  storageBucket: "louaa-e-com.firebasestorage.app",
  messagingSenderId: "454174106794",
  appId: "1:454174106794:web:917c1c53ff0466fa545cd3",
  measurementId: "G-N3164HM3GF"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider
const provider = new GoogleAuthProvider();
// Set up Google auth
provider.setCustomParameters({
    prompt: "select_account" // Force users to select an account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db= getFirestore();

//create some of methods
export const createUserDocumentFromAuth= async (userAuth) => {
 const userDocRef= doc(db, 'users', userAuth.uid);
 console.log(userDocRef);

 const userSnapshot= await getDoc(userDocRef)
 
 //console.log(userSnapshot);
 //console.log(userSnapshot.exists());

 // 1 Check if user data exists

 //if user data does not exist
 if(!userSnapshot.exists())
{
  const{displayName,email }= userAuth;
  const createdAt = new Date(); //new Date() Object , when users are sign it

  try{
      await setDoc(userDocRef, {
      displayName,
      email,
      createdAt  
      });
  }
  catch(error) {

console.log('error creating the user', error.message);// error.message comes from error
  }
}
return userDocRef;

 //2 return userDocRef

};