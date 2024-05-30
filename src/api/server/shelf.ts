
import { createEffect } from "effector";
import { api } from "./axiosInstance";
import { IShelfInfo } from "../../interfaces/interface";

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