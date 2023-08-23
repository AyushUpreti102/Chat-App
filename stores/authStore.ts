import { auth } from "~/composables/auth"

export const useAuthStore = definePiniaStore('authStore', () => {
  const user = ref({})
  const router = useRouter()
  const isLoggedIn = computed(() => user.value.hasOwnProperty('uid'))
  
  const login = async ({email, password}: {email: string, password: string}) => {
    const loginResult = await auth('login', {email, password})
    if(loginResult) {
        user.value = loginResult.user
        router.push('/abc')
    }
  }

  const signUp = async ({email, password}: {email: string, password: string}) => {
    const signUpResult = await auth('signup', {email, password})
    if(signUpResult) {
        user.value = signUpResult.user
        router.push('/abc')
    }
  }

  const setUser = (payload: any) => {
    user.value = payload
  }

  return {
    user,
    isLoggedIn,
    login,
    signUp,
    setUser
  }
})