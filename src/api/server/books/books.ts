import { api } from "../../axios/axiosInstance";
import { IBook, ICreateBook } from "../../../interfaces/interface";

import { createEffect } from "effector";

export const getAllBooksFX = createEffect(async () => {
  try {
    const { data } = await api.get('/book/all');
    if (data) {
      return data;
    }
  }
  catch (error) {
    throw new Error('Error to fetch all books!');
  }
});

export const createBookFX = createEffect(async (book: ICreateBook) => {
  try {
    const { data } = await api.post('/book/create', book);
    return data;
  }
  catch (error) {
    throw new Error('Failed to create book!');
  }
});

export const editBookFX = createEffect(async (book: IBook) => {
  try {
    console.log('Book object:', book)
    const { data } = await api.patch(`/book/edit/${book.id}`, book);
    return data;
  }
  catch (error) {
    console.log(error);
    throw new Error('Failed to patch book!');
  }
});

export const deleteBookFX = createEffect(async (id: string) => {
  try {
    const { data } = await api.delete(`/book/delete/${id}`);
    return data
  }
  catch (error) {
    throw new Error('Failed to delete book!');
  }
})

export const getCurentBookFX = createEffect(async (id: string | undefined) => {
  try {
    const { data } = await api.get(`/book/${id}`);
    return data
  }
  catch (error) {
    throw new Error('Failed white fetching current book!');
  }
})

export async function getCurrentBook(id: string | undefined): Promise<IBook> {
  try {
    const data: IBook = await getCurentBookFX(id);
    return data;
  } catch (error) {
    throw new Error('Failed while get current book!');
  }
};