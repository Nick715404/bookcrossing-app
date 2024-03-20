import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";
import { ICreateUser, IUser } from "../../../interfaces/interface";

export const CreateUserFX = createEffect(async (user: ICreateUser) => {
  try {
    const { data } = await api.post('/user/create', user);
    return data;
  }
  catch (error) {
    console.log(error);
  }
});

export const GetCurrentUserFX = createEffect(async (user: IUser) => {
  try {
    const { data } = await api.get(`/user/find/${user.vkid}`);

    if (!data) {
      const { data } = await api.post('/user/create', user);
      return data;
    }

    return data;
  }
  catch (error) {
    throw error;
  }
});