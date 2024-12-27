import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    // Create logGoogleUser function
    const logGoogleUser = async () => { 
        
        //const response = await signInWithGooglePopup();
        
        //destruct of response and pass in as userAuth 
        const { user } = await signInWithGooglePopup();
        
        //callig method using response user object
       const userDocRef= await createUserDocumentFromAuth(user)
    };

    return (
        <div>
            <h1>I'm the sign-in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    );
};

export default SignIn;