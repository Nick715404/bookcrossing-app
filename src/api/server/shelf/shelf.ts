import { IBookOnShelf, IShelfInfo } from "../../../interfaces/interface";
import { api } from "../../axios/axiosInstance";
import { createEffect } from "effector";

export const FindCurrentShelf = createEffect(async (userId: string) => {
  try {
    const { data } = await api.get(`/shelf/find/${userId}`);
    const shelf: IShelfInfo = await data;
    console.log(shelf);
    return shelf;
  }
  catch (error) {
    console.log(error);
  }
});

export const FindBooksOnShelfFX = createEffect(async (userId: string | undefined) => {
  try {
    const { data } = await api.get(`/shelf/find/${userId}`);
    const shelf: IShelfInfo = data;
    const shelfBooks = shelf.books;
    // console.log(shelfBooks);
    return shelfBooks;
  }
  catch (error) {
    console.log(error);
  }
});