import { Paper } from '@mui/material'
import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'
import { instructor } from '@/misc/sidebarconfig'
import { useRouter } from 'next/router'
import { Confirm } from './shared'
import Cookies from 'js-cookie'

const Sidebar = ({ children, type }) => {
    const router = useRouter()

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
    <div style={{display: 'flex', flexDirection: 'row'}} >
        <Paper 
            elevation={5} 
            sx={{
                height: '100vh', 
                width: {
                    md: '8%',
                    xs: '18%'
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '40px',
                // position: 'fixed',
            }}
        >
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
            ) : ''}
            


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
        {children}
    </div>
    )
}

export default Sidebar