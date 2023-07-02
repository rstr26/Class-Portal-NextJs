import Sidebar from '@/components/Sidebar'
import React, { useEffect } from 'react'
import { Authorize, Alert } from '@/components/shared'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const index = () => {
  const router = useRouter()

  useEffect(() => {
    Authorize(Cookies.get('accessToken'))
    .then((result) => {
      console.log(result)
      if(result === 'unauthorized' || result === 'forbidden'){
        Alert('info', 'Unauthorized Access', `Your access is ${result}, redirecting to log in page...`, 3000)
        Cookies.remove('accessToken')
        router.replace('/')
      }
      else if(result.role !== 'student' && router.pathname.includes('student')){
        Alert('info', 'Access Denied', 'You do not have access to this page', 3000)
        router.replace('../')
      }
    })
  }, [])
  return (
    <React.Fragment>
      <Sidebar type='student'>
        <h1>Hello Im the Student Page</h1>
      </Sidebar>
    </React.Fragment>
  )
}

export default index