import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";

export const getAllBooksFX = createEffect(async () => {
  try {
    const { data } = await api.get('/book/all');
    return data;
  }
  catch (error) {
    console.log(`${error}, что то с бэком`)
  }
});