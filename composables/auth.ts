import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const auth = async (action: string, {email, password}: {email: string, password: string}) => {
    const { $auth: auth } = useNuxtApp()
    if(action == 'login') {
        return await signInWithEmailAndPassword(auth, email, password)
    }
    if (action == 'signup') {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
}