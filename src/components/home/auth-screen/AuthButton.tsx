import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components"

const AuthButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='flex gap-3 flex-1 md:flex-row flex-col'>
      <RegisterLink className='flex-1' onClick={() => setLoading(true)}>
        <Button className='w-full' variant={"outline"} disabled={loading}>
          Sign Up
        </Button>
      </RegisterLink>
      <LoginLink className='flex-1' onClick={() => setLoading(true)}>
        <Button className='w-full' disabled={loading}>
          Login
        </Button>
      </LoginLink>
    </div>
  )
}

export default AuthButton