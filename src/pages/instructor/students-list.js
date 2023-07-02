import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useRouter } from 'next/router'

const StudentsList = () => {
  const router = useRouter()

  return (
    <React.Fragment>
        <Sidebar type='instructor'>
            <h1>Hello Im the Students List Page</h1>
        </Sidebar>
    </React.Fragment>
  )
}

export default StudentsList