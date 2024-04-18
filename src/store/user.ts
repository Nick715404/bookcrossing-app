import { createStore } from "effector";
import { GetCurrentUserFX, CreateUserFX } from "../api/server/user/user";
import { IServerUser } from "../interfaces/interface";
import { UpdateUserCityFX } from "../utilities/user/userCity";

export const $user = createStore<IServerUser>({
  userId: '',
  vkid: '',
  city: '',
  name: '',
  surName: '',
});

export const $userCity = createStore('');

$userCity.on(UpdateUserCityFX.doneData, (_, action) => action);

$user.on(CreateUserFX.doneData, (_, newUser) => newUser);
$user.on(GetCurrentUserFX.doneData, (_, newUser) => {
  return newUser
});
