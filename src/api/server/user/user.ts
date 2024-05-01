import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";
import { ICreateUser, IUser, IVkUser } from "../../../interfaces/interface";
import { fetchVkUser } from "../../vk-bridge/user";
import { vkUser } from "../../../constants/vk-users";

// export const CreateUserFX = createEffect(async (user: ICreateUser) => {
//   try {
//     const { data } = await api.post('/user/create', user);
//     return data;
//   }
//   catch (error) {
//     throw new Error('Failed to create user!');
//   }
// });

export const fetchUserFromDataBase = async (id: number) => {
  try {
    const response = await api.get(`/user/find/${id}`);

    if (response.statusText !== 'OK') {
      return {
        status: 'epmty',
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
    console.log(data);
    return data.user;
  }
  catch (error) {
    return new Error('Error with server');
  }
});

export const GetCurrentUserFromServerFX = createEffect(async (id: number) => {
  try {
    const { data } = await api.get(`/user/find/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Error with server');
  }
});