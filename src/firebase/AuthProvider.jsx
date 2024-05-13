import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    // console.log(user)

    // const [reload, setReload] = useState(false)
    const [loading, setLoading] = useState(true)

    // social provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create a new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // // update user profile
    // const updateUser = (name, image) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: image
    //       })
          
    // }
    // console.log("auth",loading)


    // sign in user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //logout
    const logout = () => {
        setUser(null);
        signOut(auth);
        setLoading(true)
    };

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {  
                setUser(user)
            }

            setLoading(false)
        });

        return () => {
            unSubscribe()
        }
    }, [])

    const Info = { createUser, signIn, googleLogin, githubLogin, user, logout, loading}
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;