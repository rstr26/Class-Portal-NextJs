import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Paper, TextField } from '@mui/material'
import { Icon, Button } from 'semantic-ui-react'

const LogInPage = ({ username, password, buttonLoading, handleLogIn, handleInput }) => {
  return (
    <div className={styles.homeBg}>
        <Paper elevation={5} className={styles.logInPaper}>
          <h1>Log In to Class Portal.</h1>

          <TextField 
            inputProps={{ maxLength: 14 }} 
            label='Username' 
            variant='outlined' 
            sx={{marginTop: '20px'}}
            value={username}
            onChange={(e) => handleInput(e.target.value, 'username')} 
          /><br />
          <TextField 
            inputProps={{ maxLength: 14 }} 
            label='Password' 
            variant='outlined' 
            sx={{marginTop: '20px'}} 
            type='password' 
            value={password}
            onChange={(e) => handleInput(e.target.value, 'password')}
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
  )
}

export default LogInPage