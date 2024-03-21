import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";
import { ICreateBook } from "../../../interfaces/interface";

export const getAllBooksFX = createEffect(async () => {
  try {
    const { data } = await api.get('/book/all');
    return data;
  }
  catch (error) {
    console.log(`${error}, что то с бэком`)
  }
});

export const createBookFX = createEffect(async (book: ICreateBook) => {
  try {
    console.log(book);
    const { data } = await api.post('/book/create', book);
    console.log(data);
    return data;
  }
  catch (error) {
    console.log(error);
  }
});

export const deleteBook = async (id: string) => {
  try {
    const { data } = await api.delete(`/book/delete/${id}`);
    return data
  }
  catch (error) {
    console.log(error)
  }
}