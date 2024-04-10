import { GetCurrentUserFX } from '../../api/server/user/user';
import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function UserProvider({ children }: Props) {

  useEffect(() => {
    GetCurrentUserFX();
  }, []);

  return (
    <>
      {children}
    </>
  )
}