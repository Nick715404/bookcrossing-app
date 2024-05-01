import { createEffect } from "effector";
import { api } from "../../axios/axiosInstance";
import { ICreateUser, IUser, IVkUser } from "../../../interfaces/interface";
import { fetchVkUser } from "../../vk-bridge/user";
import { vkUser } from "../../../constants/vk-users";

export const CreateUserFX = createEffect(async (user: ICreateUser) => {
  try {
    const { data } = await api.post('/user/create', user);
    return data;
  }
  catch (error) {
    throw new Error('Failed to create user!');
  }
});

export const GetCurrentUserFX = createEffect(async () => {
  try {
    const user = await fetchVkUser();
    console.log(user)

    if (!user) {
      return new Error('User not found!')
    }

    const fetchedUser = await api.get(`/user/find/${user.id}`);
    console.log(fetchedUser)

    if (fetchedUser.data === '') {
      const createdUser = await api.post('/user/create', user);
      console.log(createdUser)
      
      if (createdUser.statusText !== "Created") {
        return new Error("Error while creating user");
      }

      return await createdUser.data.user;
    }

    return await fetchedUser.data;
  }
  catch (error) {
    return new Error('Error with server');
  }
});
