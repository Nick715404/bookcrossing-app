import { api } from "../../axios/axiosInstance";
import { IVkUser } from "../../../interfaces/interface";
import { createEffect } from "effector";

export const fetchUserFromDataBase = async (id: number) => {
  try {
    const response = await api.get(`/user/find/${id}`);

    if (response.statusText !== 'OK') {
      return {
        status: 'empty',
        user: null,
      }
    }

    return {
      status: 'founded',
      user: response.data,
    }
  } catch (error) {
    return {
      status: 'epmty',
      user: null,
    }
  }
};

export const GetCurrentUserFX = createEffect(async (user: IVkUser) => {

  if (!user) return new Error('User not found!');

  try {
    const { data } = await api.post('/user/create', user);
    return data.user;
  }
  catch (error) {
    return new Error('Error with server');
  }
});

export const GetCurrentUserFromServerFX = createEffect(async (id: number) => {
  try {
    const { data } = await api.get(`/user/find/${id}`);
    return data;
  } catch (error) {
    throw new Error('Error with server');
  }
});