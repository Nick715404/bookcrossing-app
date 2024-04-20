import { GetCurrentUserFX } from '../../api/server/user/user';
import { fetchVkUser } from '../../api/vk-bridge/user';
import { setStatusActiveModal } from '../../store/activeModal';
import React, { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export default function UserProvider({ children }: Props) {

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchVkUser();

      if (!userData.city) {
        setStatusActiveModal('chooseCity');
        return;
      }

      GetCurrentUserFX(userData);
    };

    fetchData();
  }, []);

  return (
    <>
      {children}
    </>
  )
}