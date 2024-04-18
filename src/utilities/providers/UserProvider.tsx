import { GetCurrentUserFX } from '../../api/server/user/user';
import { fetchVkUser } from '../../api/vk-bridge/user';
import { ChooseCity } from '../../components/ChooseCity/ChooseCity';
import React, { useEffect, useState } from 'react'
import { IVkUser } from '../../interfaces/interface';
import { setStatusActiveModal } from '../../store/activeModal';

type Props = {
  children: React.ReactNode
}

export default function UserProvider({ children }: Props) {

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchVkUser();
      delete userData.city

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