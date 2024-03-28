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