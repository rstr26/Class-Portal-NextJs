import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Paper, TextField } from '@mui/material'
import { Icon, Button } from 'semantic-ui-react'
import { Alert } from '@/components/shared'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Login } from '@/misc/api/requests'

export default function Home() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [buttonLoading, setButtonLoading] = useState(false)

  const handleLogIn = async () => {
    setButtonLoading(true)
    let login = await Login(username, password)
    let { role } = await login.json()
    
    if(login.status === 200) {
      setButtonLoading(false)
      Alert('success', 'Log In Success', 'You have successfully logged in.', 5000)
      
      if(role === 'teacher'){
        router.replace('/instructor')
      }
      else if(role === 'student'){
        router.replace('/student')
      }
    }
    else {
      setButtonLoading(false)
      Alert('error', 'Log In Failed', 'Invalid username or password.', 5000)
    }
  }

  return (
    <>
      <Head>
        <title>Class Portal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.homeBg}>
        <Paper elevation={5} className={styles.logInPaper}>
          <h1>Log In to Class Portal.</h1>

          <TextField 
            inputProps={{ maxLength: 14 }} 
            label='Username' 
            variant='outlined' 
            sx={{marginTop: '20px'}}
            onChange={(e) => setUsername(e.target.value)} 
          /><br />
          <TextField 
            inputProps={{ maxLength: 14 }} 
            label='Password' 
            variant='outlined' 
            sx={{marginTop: '20px'}} 
            type='password' 
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <Button 
            primary
            style={{marginTop: '20px'}} 
            loading={buttonLoading}
            disabled={buttonLoading}
            onClick={() => handleLogIn()}
          >
            Log In
          </Button>

          <div className={styles.logInFooter} style={{position: 'absolute', bottom: '50px', fontStyle: 'italic'}}>
            <p>This website is for personal project purposes only.</p>

            <Link href='https://github.com/rstr26'>
              <Icon name='github' size='large' link />
            </Link>
            
            <Link href='https://www.facebook.com/Resterrr'>
              <Icon name='facebook' size='large' link />
            </Link>
          </div>
        </Paper>
      </div>
    </>
  )
}
