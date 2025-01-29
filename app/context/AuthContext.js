'use client'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
  //  const providerApple = new AppleAuthProvider(); IMPORTAR EN FIREBASE/AUTH
  //  const providerFacebook = new FacebookAuthProvider(); IMPORTAR EN FIREBASE/AUTH
    const [user, setUser] = useState({
        email: null,
        uid: null
    });

    //Creamos un usuario pasando parametro email y pass
    const registerUser = async (values) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;
            setUser({
                email: user.email,
                uid: user.uid
            });
        } catch (error) {
            console.error("Error registering user:", error);
            // Optionally, handle the error (e.g., show a message to the user)
        }
    }

    //Ingresar con el PopUp de google
    const googleLogIn = async () => {
        await signInWithPopup(auth, provider);
    }

    return (
        <AuthContext.Provider value={{ user, registerUser, googleLogIn }}>
            {children}
        </AuthContext.Provider>
    )
    
}