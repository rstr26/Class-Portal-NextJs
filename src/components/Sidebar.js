import { Paper } from '@mui/material'
import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'
import { instructor } from '@/misc/sidebarconfig'
import { useRouter } from 'next/router'

const Sidebar = ({ children, type }) => {
    const router = useRouter()

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
                marginRight: {
                    md: '60px',
                    xs: '15px'
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '40px'
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
                                    color='blue' 
                                    name={item.icon}
                                    link 
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
                        onClick={() => router.replace('/')}
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