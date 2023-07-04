import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import React, { useState } from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'
import { instructor, student } from '@/misc/sidebarconfig'
import { useRouter } from 'next/router'
import { Confirm } from './shared'
import Cookies from 'js-cookie'

const Sidebar = ({ children, type }) => {
    const router = useRouter()
    const [bottomDrawer, toggleBottomDrawer] = useState(false)

    const handleLogOut = () => {
        Confirm('question', 'Log Out', 'Are you sure you want to log out?')
        .then((result) => {
            if(result.isConfirmed) {
                Cookies.remove('accessToken')
                router.replace('/')
            }
        })
    }

    return (
        // Container
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {/* Sidebar */}
            <Paper 
                elevation={5} 
                sx={{
                    height: '100vh', 
                    width: {
                        md: '8%',
                        xs: '18%'
                    },
                    display: {
                        xs: 'none',
                        md: 'flex'
                    },
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '40px',
                }}
            >
                {/* If user is instructor, show instructor menu item */}
                {type === 'instructor' ? (
                    instructor.map((item, index) => {
                        return(
                            <Popup
                                key={index}
                                trigger={
                                    <Icon 
                                        size='big' 
                                        color={item.pathname === router.pathname ? 'blue' : 'grey'}
                                        name={item.icon}
                                        link 
                                        onClick={() => router.push(item.pathname)}
                                        style={{marginBottom: '60px'}}
                                    />
                                }
                                content={item.content}
                                position='right center'
                            />
                        )
                    })
                ) : 
                // If user is student, show student menu item
                    student.map((item, index) => {
                        return(
                            <Popup
                                key={index}
                                trigger={
                                    <Icon 
                                        size='big' 
                                        color={item.pathname === router.pathname ? 'blue' : 'grey'}
                                        name={item.icon}
                                        link 
                                        onClick={() => router.push(item.pathname)}
                                        style={{marginBottom: '60px'}}
                                    />
                                }
                                content={item.content}
                                position='right center'
                            />
                        )
                    })
                }
                


                {/* Log Out Menu Button */}
                <Popup
                    trigger={
                        <Icon
                            size='big'
                            color='blue'
                            name='log out'
                            link
                            onClick={() => handleLogOut()}
                            style={{marginTop: 'auto', marginBottom: '30px'}}
                        />
                    }
                    content='Log Out'
                    position='right center'
                />
            </Paper>

            {/* For mobile devices, bottom drawer */}
            <Drawer
                anchor='bottom'
                open={bottomDrawer}
                onClose={() => toggleBottomDrawer(!bottomDrawer)}
            >
                <List>
                    {/* Instructor menu */}
                    {type === 'instructor' ? 
                        instructor.map((item, i) => {
                            return(
                                <React.Fragment key={i}>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={() => router.push(item.pathname)}>
                                            <ListItemIcon>
                                                <Icon color={item.pathname === router.pathname ? 'blue' : 'grey'} name={item.icon} />
                                            </ListItemIcon>
                                            <ListItemText primary={item.content}/>
                                        </ListItemButton>
                                    </ListItem>
                                </React.Fragment>
                            )
                        })
                    :
                        // Student menu
                        student.map((item, i) => {
                            return(
                                <React.Fragment key={i}>
                                    <ListItem disablePadding>
                                        <ListItemButton onClick={() => router.push(item.pathname)}>
                                            <ListItemIcon>
                                                <Icon color={item.pathname === router.pathname ? 'blue' : 'grey'} name={item.icon} />
                                            </ListItemIcon>
                                            <ListItemText primary={item.content}/>
                                        </ListItemButton>
                                    </ListItem>
                                </React.Fragment>
                            )
                        })
                    }

                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            toggleBottomDrawer(!bottomDrawer)
                            handleLogOut()
                        }}>
                            <ListItemIcon>
                                <Icon name='log out' />
                            </ListItemIcon>
                            <ListItemText primary='Log Out'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            {/* Page content */}
            {children}

            {/* Bottom drawer toggler, hidden on medium and up devices */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    marginRight: '20px',
                    marginBottom: '20px',
                    display: {
                        xs: 'block',
                        md: 'none'
                    }
                }}
            >
                <Button
                    icon={bottomDrawer ? 'chevron down' : 'chevron up'}
                    circular 
                    size='huge'
                    onClick={() => toggleBottomDrawer(!bottomDrawer)}
                />
            </Box>
        </div>
    )
}

export default Sidebar