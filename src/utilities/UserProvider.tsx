import React, { useEffect } from 'react'

import { vkUser } from '../constants/vk-users';
import { GetCurrentUserFX } from '../api/server/user/user';

type Props = {
  children: React.ReactNode
}

export default function UserProvider({ children }: Props) {

  useEffect(() => {
    GetCurrentUserFX(vkUser);
  }, []);

  return (
    <>
      {children}
    </>
  )
}