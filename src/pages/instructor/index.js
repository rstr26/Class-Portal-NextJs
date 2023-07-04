import Sidebar from '@/components/Sidebar'
import { Alert, Authorize } from '@/components/shared'
import { Grid, Paper } from '@mui/material'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import RequireAuth from '@/components/RequireAuth'

const index = () => {
  const router = useRouter()

  return (
    <RequireAuth>
      <Sidebar type='instructor'>
        <Container>
          {/* Stats Grid */}
          <Grid container columns={3} columnSpacing={2} rowSpacing={1}>
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
    </RequireAuth>
  )
}

//subject, students, pending for enrollment

export default index