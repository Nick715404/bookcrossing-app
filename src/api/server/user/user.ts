import { api } from '../../axios/axiosInstance';
import { IVkUser } from '../../../types/interface';
import { createEffect } from 'effector';
import { TCreateUser } from '../../../types';

export const fetchUserFromDataBase = async (id: number) => {
	try {
		const response = await api.get(`/user/find/${id}`);

		if (response.statusText !== 'OK') {
			return {
				status: 'empty',
				user: null,
			};
		}

		return {
			status: 'founded',
			user: response.data,
		};
	} catch (error) {
		return {
			status: 'empty',
			user: null,
		};
	}
};

export const GetCurrentUserFX = createEffect(async (user: TCreateUser) => {
	if (!user) return new Error('User not found!');

	try {
		const { data: response } = await api.post('/users', user);
		return response.user;
	} catch (error) {
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
