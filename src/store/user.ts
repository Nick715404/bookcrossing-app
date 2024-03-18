import { createStore } from "effector";
import { GetCurrentUserFX, CreateUserFX } from "../api/server/user/user";
import { IUser } from "../interfaces/interface";

export const $user = createStore<IUser | null>(null);

$user.on(CreateUserFX.doneData, (_, newUser) => newUser);

$user.on(GetCurrentUserFX.doneData, (user, newUser) => newUser);
