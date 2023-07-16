import Sidebar from '@/components/Sidebar'
import { Alert } from '@/components/shared'
import { Grid, Paper } from '@mui/material'
import React, { useEffect } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import RequireAuth from '@/components/RequireAuth'

const paperStyle = {
  padding: '10px',
  letterSpacing: '2px'
}

const announcementPaperStyle = {
  letterSpacing: '0', 
  padding: '10px', 
  width: '300px', 
  height: '300px', 
  backgroundColor: 'rgb(253, 253, 189)',
  flex: '0 0 auto',
  marginRight: '20px',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const statsPaperStyle = index => {
  return {
    backgroundColor: index === 1 ? 'rgb(161, 204, 209)' : index === 2 ? 'rgb(233, 179, 132)' : 'rgb(160, 196, 157)', 
    height: '150px', 
    color: 'white', 
    cursor: 'pointer'
  }
}

const index = () => {
  const router = useRouter()

  return (
    <RequireAuth>
      <Sidebar type='instructor'>
        <Container>
          {/* Stats Row */}
          <Grid container columns={3} columnSpacing={2} rowSpacing={1}>
            <Grid item xs={3} md={1}>
              <Paper sx={[paperStyle, statsPaperStyle(1)]}>
                <h2>SUBJECT</h2>
              </Paper>
            </Grid>

            <Grid item xs={3} md={1}>
              <Paper sx={[paperStyle, statsPaperStyle(2)]}>
                <h2>STUDENTS</h2>
              </Paper>
            </Grid>

            <Grid item xs={3} md={1}>
              <Paper sx={[paperStyle, statsPaperStyle(3)]}>
                <h2>ENROLLMENT</h2>
              </Paper>
            </Grid>
          </Grid>

          {/* Announcement and Calendar Row */}
          <Grid container columns={3} columnSpacing={2} rowSpacing={1} sx={{marginTop: '20px'}}>
            <Grid item xs={3} md={2}>
              <Paper sx={paperStyle}>
                <h2>ANNOUNCEMENT</h2>

                <div className='announcement' style={{display: 'flex', overflow: 'auto'}}>
                  <Paper sx={announcementPaperStyle}>
                    <div>
                      <h4>Announcement Title</h4>

                      <p>Announcement content</p>
                    </div>

                    <div>
                      <p>Date Posted</p>
                    </div>
                  </Paper>

                  <Paper sx={announcementPaperStyle}>
                    <div>
                      <h4>Announcement Title</h4>

                      <p>Announcement content</p>
                    </div>

                    <div>
                      <p>Date Posted</p>
                    </div>
                  </Paper>

                  <Paper sx={announcementPaperStyle}>
                    <div>
                      <h4>Announcement Title</h4>

                      <p>Announcement content</p>
                    </div>

                    <div>
                      <p>Date Posted</p>
                    </div>
                  </Paper>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={3} md={1}>
              <Paper sx={paperStyle}>
                <h2>CALENDAR</h2>
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