import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../../Hook/useAxiosPublic";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user , setUser] = useState()
    const [loading , setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }
    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const signIn = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const userProfile = (name , image) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setLoading(false)
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email : currentUser.email}
                axiosPublic.post('/jwt' , userInfo )
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token' , res.data.token)
                    }
                })

            }
            else{
                localStorage.removeItem('access-token')
            }
        })
        return () =>{
            unsubscribe();
        }
    },[axiosPublic])




    const authInfo = {loading , user, googleSignIn , createUser ,userProfile , signIn , logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;