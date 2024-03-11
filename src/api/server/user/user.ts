import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";

export const createUserFX = createEffect(async (user: any) => {
  try {
    console.log(user);
    const { data } = await api.post('/user/create', user);
    return data;
  }
  catch (error) {
    console.log(error);
  }
});