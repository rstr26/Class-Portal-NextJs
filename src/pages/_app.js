import 'semantic-ui-css/semantic.min.css'
import '@/styles/globals.css'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import { AuthenticateToken } from '@/misc/api/requests'
import { Alert } from '@mui/material'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const authenticate = async () => {
      let auth = await AuthenticateToken(Cookies.get('accessToken'))
      let { role } = await auth.json()
      
      if(auth.status === 200) {
        if(role === 'teacher') {
          setLoading(false)
          router.replace('/instructor')
        }
        else {
          setLoading(false)
          router.replace('/student')
        }
      }
      else{
        setLoading(false)
        Cookies.remove('accessToken')
        router.replace('/')
        Alert('error', 'Authentication Failed', 'You will be redirected to the login page.', 5000)
      }
    }

    authenticate()
  }, [])

  if(loading) return <Loader text='Authenticating, Please Wait...'/>
  return <Component {...pageProps} />
}
