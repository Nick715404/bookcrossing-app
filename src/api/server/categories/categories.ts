import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";

export const getAllCategoriesFX = createEffect(async () => {
  try {
    const { data } = await api.get('/category/all');
    return data;
  }
  catch (error) {
    throw new Error('Неудалось получить книги в getAllGEnresFX');
  }
})