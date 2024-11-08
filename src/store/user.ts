import { createStore } from 'effector';
import {
	GetCurrentUserFX,
	GetCurrentUserFromServerFX,
} from '../api/server/user/user';
import { IServerUser } from '../types/interface';
import { UpdateUserCityFX } from '../utilities/user-city.utils';

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
