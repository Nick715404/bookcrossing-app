import { useUnit } from "effector-react";
import { useBookInFav } from "../../../../hooks";
import { $user } from "../../../../store/user";
import { useEffect } from "react";
import { PutBookInFavFX } from "../../../../store/favorites";
import { CheckBookInFavPipeFX } from "../../../../utilities/category/category.utils";


type Props = {
  bookId: string;
}

export function useToFavButton({ bookId }: Props) {
  const user = useUnit($user);

  const { mutate: move, isSuccess, data } = useBookInFav({
    bookId: bookId,
    userId: user.userId,
  });

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    move();
  };

  useEffect(() => {
    if (isSuccess) PutBookInFavFX(data);
  }, [isSuccess, data]);

  useEffect(() => {
    CheckBookInFavPipeFX(bookId)
  }, [isSuccess]);

  return handleBookMove;
}