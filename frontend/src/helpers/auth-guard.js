import router from '@/router'

/* eslint-disable-next-line */
export function authGuard(to){
    let token = localStorage.getItem('token')
    console.log('TOKEN GUARD', token)
    
    if(token){
        return true
    }

    router.push('/login')
}