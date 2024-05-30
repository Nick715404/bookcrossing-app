import { useMutation, useQueryClient } from "react-query";
import { removeFromFav } from "../api/server";
import { setSnackbar } from "../store/activeModal";

type useRemoveBookFormFavProps = {
  bookId: string,
  vkId: number,
  showSnackbar: (e: boolean) => void,
}

export function useRemoveBookFormFav({ bookId, vkId, showSnackbar }: useRemoveBookFormFavProps) {

  const client = useQueryClient();

  return useMutation({
    mutationKey: ['delete', 'favorites'],
    mutationFn: () => removeFromFav({ bookId: bookId, vkId: vkId }),
    onSuccess: () => {
      setSnackbar('fav-remove')
      client.invalidateQueries({
        queryKey: ['books all', 'books favorites'],
      })
      showSnackbar(true)
    },
  });
}