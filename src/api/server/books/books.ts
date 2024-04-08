import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";
import { ICreateBook } from "../../../interfaces/interface";

export const getAllBooksFX = createEffect(async () => {
  try {
    const { data } = await api.get('/book/all');
    console.log(data);
    return data;
  }
  catch (error) {
    console.log(`${error}, что то с бэком`)
  }
});

export const createBookFX = createEffect(async (book: ICreateBook) => {
  try {
    const { data } = await api.post('/book/create', book);
    return data;
  }
  catch (error) {
    console.log(error);
  }
});

export const deleteBookFX = createEffect(async (id: string) => {
  try {
    const { data } = await api.delete(`/book/delete/${id}`);
    return data
  }
  catch (error) {
    console.log(error)
  }
})

export const getCurentBookFX = createEffect(async (id: string) => {
  try {
    const { data } = await api.get(`/book/${id}`);
    return data
  }
  catch (error) {
    console.log(error)
  }
})