import Sidebar from '@/components/Sidebar'
import React, { useEffect } from 'react'
import { Authorize, Alert } from '@/components/shared'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import RequireAuth from '@/components/RequireAuth'

const index = () => {
  const router = useRouter()

  return (
    <RequireAuth>
      <Sidebar type='student'>
        <h1>Hello Im the Student Page</h1>
      </Sidebar>
    </RequireAuth>
  )
}

export default index