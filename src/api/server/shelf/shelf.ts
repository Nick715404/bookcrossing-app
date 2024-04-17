import { IExtendedBook, IShelfInfo } from "../../../interfaces/interface";
import { api } from "../../axios/axiosInstance";
import { createEffect } from "effector";

export const FindCurrentShelf = createEffect(async (userId: string) => {
  try {
    const { data } = await api.get(`/shelf/find/${userId}`);
    const shelf: IShelfInfo = await data;
    return shelf;
  }
  catch (error) {
    throw new Error('Failed to find shelf!');
  }
});

export const FindBooksOnShelfFX = createEffect(async (userId: string | undefined) => {
  try {
    const { data } = await api.get(`/shelf/find/${userId}`);
    const shelf: IShelfInfo = data;
    const shelfBooks = shelf.books;
    return shelfBooks;
  }
  catch (error) {
    throw new Error('Failed to fetch books on shelf!');
  }
});