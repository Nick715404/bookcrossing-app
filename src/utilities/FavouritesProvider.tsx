import { useUnit } from "effector-react";
import { useEffect } from "react"
import { $user } from "../store/user";
import { GetFavFromUser } from "../api/server/favorites/favorites";

type Props = {
  children: React.ReactNode
}

export default function FavouritesProvider({ children }: Props) {

  const user = useUnit($user);

  useEffect(() => {
    if (user.userId !== '') {
      const getData = async () => {
        await GetFavFromUser(user.userId);
      };
      getData();
    }
  }, [user]);

  return (
    <>
      {children}
    </>
  )
}