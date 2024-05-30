import { DeleteBookFromFavPipeFX, EditArrayFX } from "../../../../store/favorites";
import { $user } from "../../../../store/user";
import { useRemoveBookFormFav } from "../../../../hooks";
import { useEffect, useState } from "react";
import { useUnit } from "effector-react";

type Props = { bookId: string, };

export function useReverse({ bookId }: Props) {
  const user = useUnit($user);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const { data, isSuccess, mutate: remove } = useRemoveBookFormFav({
    bookId: bookId, showSnackbar: setShowSnackbar, vkId: user.vkId
  });

  useEffect(() => {
    if (isSuccess) {
      setShowSnackbar(true);
      DeleteBookFromFavPipeFX(data);
    }
  }, [isSuccess]);

  const handleBookMove = async (e: any) => {
    e.preventDefault();
    remove();
    if (data && data.message !== '') {
      EditArrayFX({ id: data.book.id, favourite: data.book.favourite });
    }
  };

  return {
    handleBookMove,
    showSnackbar,
    setShowSnackbar
  }
}