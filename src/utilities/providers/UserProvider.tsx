import React, { useEffect } from 'react'

import { vkUser } from '../../constants/vk-users';
import { GetCurrentUserFX } from '../../api/server/user/user';
import { fetchVkUser } from '../../api/vk-bridge/user';
import { IVkUser } from '../../interfaces/interface';

type Props = {
  children: React.ReactNode
}

export default function UserProvider({ children }: Props) {

  const userMutation = async () => {
    GetCurrentUserFX();
  }

  useEffect(() => {
    userMutation();
  }, []);

  return (
    <>
      {children}
    </>
  )
}