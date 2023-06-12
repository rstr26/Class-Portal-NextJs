import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Button, Grid, Input, Paper, TextField } from '@mui/material'
import { Icon, Button as SemanticBtn } from 'semantic-ui-react'

export default function Home() {
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

          <TextField label='Username' variant='outlined' sx={{marginTop: '20px'}} /><br />
          <TextField label='Password' variant='outlined' sx={{marginTop: '20px'}} type='password' /><br/>
          <Button variant='contained' sx={{marginTop: '20px'}}>Log In</Button>

          <div style={{position: 'absolute', bottom: '50px', fontStyle: 'italic'}}>
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
