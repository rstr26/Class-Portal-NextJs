import { Alert } from '@/components/shared'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Login, AuthenticateToken } from '@/misc/api/requests'
import LogInPage from '@/components/LogInPage'
import Cookies from 'js-cookie'
import Loader from '@/components/Loader'

export default function Home() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const [buttonLoading, setButtonLoading] = useState(false)

  const handleLogIn = async () => {
    setButtonLoading(true)
    let login = await Login(username, password)
    let { accessToken, role } = await login.json()
    
    if(login.status === 200) {
      setButtonLoading(false)
      Cookies.set('accessToken', accessToken)
      Alert('success', 'Log In Successful', 'You will be redirected to your dashboard.', 5000)

      if(role === 'teacher') {
        router.replace('/instructor')
      }
      else {
        router.replace('/student')
      }
    }
    else {
      setUsername('')
      setPassword('')
      setButtonLoading(false)
      Alert('error', 'Log In Failed', 'Invalid username or password.', 5000)
    }
  }

  const handleInput = (val, type) => {
    if(type === 'username') {
      setUsername(val)
    }
    else {
      setPassword(val)
    }
  }

  // Check if user is already logged in
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
      }
    }

    authenticate()
  }, [])

  if(loading) return <Loader text='Loading, please wait...'/>

  return (
    <>
      <LogInPage 
        username={username} 
        password={password} 
        buttonLoading={buttonLoading}
        handleLogIn={handleLogIn}
        handleInput={(val, type) => handleInput(val, type)}
      />
    </>
  )
}
