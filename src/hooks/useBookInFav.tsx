import { useMutation, useQueryClient } from "react-query";
import { putBookInFavorites } from "../api/server";
import { setSnackbar } from "../store/activeModal";

type useBookInFavProps = {
  bookId: string,
  userId: string,
}

export function useBookInFav({ bookId, userId }: useBookInFavProps) {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['put', 'favorites'],
    mutationFn: () => putBookInFavorites(bookId, userId),
    onSuccess: () => {
      setSnackbar('fav-adding')
      client.invalidateQueries({
        queryKey: [
          ['books all', 'books favorites'],
        ]
      });
    },
  });
};

// const { mutate: move, isSuccess, data } = 