import Sidebar from '@/components/Sidebar'
import { Alert, Authorize } from '@/components/shared'
import { AuthToken } from '@/misc/api/requests'
import { Grid, Paper } from '@mui/material'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { useRouter } from 'next/router'

const index = () => {
  const router = useRouter()

  // Authorize access to this page
  useEffect(() => {
    Authorize(Cookies.get('accessToken'))
    .then((result) => {
      console.log(result)
      if(result === 'unauthorized' || result === 'forbidden'){
        Alert('info', 'Unauthorized Access', `Your access is ${result}, redirecting to log in page...`, 3000)
        Cookies.remove('accessToken')
        router.replace('/')
      }
      else if(result.role !== 'teacher' && router.pathname.includes('instructor')){
        Alert('info', 'Access Denied', 'You do not have access to this page', 3000)
        router.replace('../')
      }
    })
  }, [])

  return (
    <Sidebar type='instructor'>
      <Container>
        {/* Stats Grid */}
        <Grid container columns={3} columnSpacing={2}>
          <Grid item xs={3} md={1}>
            <Paper elevation={3} sx={{padding: '10px'}}>
              <h3>Subject</h3>
            </Paper>
          </Grid>

          <Grid item xs={3} md={1}>
            <Paper elevation={3} sx={{padding: '10px'}}>
              <h3>Students</h3>
            </Paper>
          </Grid>

          <Grid item xs={3} md={1}>
            <Paper elevation={3} sx={{padding: '10px'}}>
              <h3>Pending for Enrollment</h3>
            </Paper>
          </Grid>
        </Grid>

        {/* <Button onClick={() => Cookies.set('key', 'Cookie 1')}>Set Cookie</Button>
        <Button onClick={() => console.log(Cookies.get('accessToken'))}>Retrieve Cookie</Button>
        <Button onClick={() => Cookies.remove('accessToken')}>Remove Cookie</Button> */}
      </Container>
    </Sidebar>
  )
}

//subject, students, pending for enrollment

export default index