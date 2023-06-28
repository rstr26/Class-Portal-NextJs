import { Alert } from '@/components/shared'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Login } from '@/misc/api/requests'
import LogInPage from '@/components/LogInPage'
import Cookies from 'js-cookie'

export default function Home() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
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
