import React, { useState, useEffect } from 'react'
import { Authorize, Alert } from './shared'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import Loader from './Loader'

const RequireAuth = ({ children }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Authorize(Cookies.get('accessToken'))
        .then((result) => {
            setLoading(false)
            if(result === 'unauthorized' || result === 'forbidden'){
                Alert('info', 'Unauthorized Access', `Your access is ${result}, redirecting to log in page...`, 3000)
                Cookies.remove('accessToken')
                router.replace('/')
            }
            if((result.role !== 'student' && router.pathname.includes('student')) || (result.role !== 'teacher' && router.pathname.includes('teacher'))){
                console.log('here')
                Alert('info', 'Access Denied', 'You do not have access to this page', 3000)
                router.replace(`../${result.role === 'student' ? result.role : result.role === 'teacher' ? 'instructor' : ''}`)
            }
        })
    }, [])

    if(loading) return <Loader text='Loading, please wait...' />

    return (
        <>
            {children}
        </>
    )
}

export default RequireAuth