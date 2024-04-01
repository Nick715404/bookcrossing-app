import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";
import { ICreateBook } from "../../../interfaces/interface";

export const getAllBooksFX = createEffect(async () => {
  try {
    const { data } = await api.get('/book/all');
    console.log('get all books done');
    return data;
  }
  catch (error) {
    console.log(`${error}, что то с бэком`)
  }
});

export const createBookFX = createEffect(async (book: ICreateBook) => {
  try {
    const { data } = await api.post('/book/create', book);
    console.log('book has been created!');
    return data;
  }
  catch (error) {
    console.log(error);
  }
});

export const deleteBook = async (id: string) => {
  try {
    const { data } = await api.delete(`/book/delete/${id}`);
    console.log('delete book done');
    return data
  }
  catch (error) {
    console.log(error)
  }
}