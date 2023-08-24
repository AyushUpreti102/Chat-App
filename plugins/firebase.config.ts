import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { useAuthStore } from '~/stores/authStore'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const { setUser } = useAuthStore()
    const router = useRouter()

    const firebaseConfig = {
        apiKey: config.public.apiKey,
        authDomain: config.public.authDomain,
        projectId: config.public.projectId,
        storageBucket: config.public.storageBucket,
        messagingSenderId: config.public.messagingSenderId,
        appId: config.public.appId,
        measurementId: config.public.measurementId
    };

    const app = initializeApp(firebaseConfig)
    const firestore = getFirestore(app)
    const auth = getAuth(app)

    auth.onAuthStateChanged((user) => {
        if(user) {
            setUser(user)
            router.push('/abc')
        }
        else {
            setUser({})
            router.push('/auth/login')
        }
    })

    return {
        provide: {
            firestore,
            auth
        }
    }
})