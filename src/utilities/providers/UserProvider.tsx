import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { GetCurrentUserFX, GetCurrentUserFromServerFX, fetchUserFromDataBase } from '../../api/server/user/user';
import { fetchVkUser } from '../../api/vk-bridge/user';
import { setStatusActiveModal } from '../../store/activeModal';
import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function UserProvider({ children }: Props) {
  const router = useRouteNavigator();
  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchVkUser();
      const serverUser = await fetchUserFromDataBase(userData.id);
      
      if (serverUser.status === "empty") {
        router.push('/onboarding')
        return;
      }

      GetCurrentUserFromServerFX(userData.id);
    };

    fetchData();
  }, []);

  return (
    <>
      {children}
    </>
  )
}