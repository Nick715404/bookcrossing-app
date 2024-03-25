import { IShelfInfo } from "../../../interfaces/interface";
import { api } from "../../axios/axiosInstance";
import { createEffect } from "effector";

export const FindCurrentShelf = createEffect(async (userId: string) => {
  try {
    const { data } = await api.get(`/shelf/find/${userId}`);
    const shelf: IShelfInfo = await data;
    return shelf;
  }
  catch (error) {
    console.log(error);
  }
});

export const FindBooksOnShelf = createEffect(async (userId: string) => {
  try {
    const { data } = await api.get(`/shelf/find/${userId}`);
    const shelf: IShelfInfo = await data;
    return shelf.books;
  }
  catch (error) {
    console.log(error);
  }
});