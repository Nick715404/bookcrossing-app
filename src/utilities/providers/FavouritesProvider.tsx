import { $user } from "../../store/user";
import { useEffect } from "react"
import { useUnit } from "effector-react";
import { GetFavFromUserFX } from "../../api/server/favorites.query";

type Props = { children: React.ReactNode, };

export default function FavouritesProvider({ children }: Props) {
  const user = useUnit($user);
  const getData = async () => await GetFavFromUserFX(user.userId);

  useEffect(() => {
    if (user.userId !== '') getData();
  }, [user]);

  return <>{children}</>;
};