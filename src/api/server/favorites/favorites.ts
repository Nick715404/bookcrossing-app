import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";

export const GetFavFromUser = createEffect(async (id: string) => {
  try {
    const { data } = await api.get(`/favorites/find/${id}`);
    const { books } = await data;
    return books;
  }
  catch (error) {
    console.log(error);
  }
});

export const PutBookToFavFX = createEffect(async ({ bookId, userId }: { bookId: string, userId: string }) => {
  try {
    const favoritesData = {
      bookId: bookId,
      userId: userId
    }
    const { data } = await api.post('/favorites/put', favoritesData);
    return data;
  }
  catch (error) {
    console.log(error);
  }
});

export const BookInFavIcon = createEffect(async (str: string) => {
  if (str !== null || '') {
    return true;
  }
});