import { IServerUser } from "../interfaces/interface";
import { UpdateUserCityFX } from "../utilities/user/userCity";
import { GetCurrentUserFX, GetCurrentUserFromServerFX } from "../api/server";
import { createStore } from "effector";

export const $user = createStore<IServerUser>({
  userId: '',
  vkId: 0,
  city: '',
  name: '',
  surName: '',
});

export const $userCity = createStore('');

$userCity.on(UpdateUserCityFX.doneData, (_, action) => action);
$user.on(GetCurrentUserFX.doneData, (_, newUser) => newUser);
$user.on(GetCurrentUserFromServerFX.doneData, (_, user) => user);
