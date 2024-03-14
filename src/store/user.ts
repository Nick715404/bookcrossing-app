import { createStore } from "effector";
import { createUserFX } from "../api/server/user/user";

export const $users = createStore([]);

$users.on(createUserFX.doneData, (_, newUser) => newUser);