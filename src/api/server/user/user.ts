import { api } from '../../axios/axiosInstance';
import { createEffect } from 'effector';
import { IServerUser, TCreateUser, TSuccessResponse } from '../../../types';

export const fetchUserFromDataBase = async (id: number) => {
	try {
		const { data: response }: { data: TSuccessResponse<any> } = await api.get(
			`/users/${id}`
		);

		if (response.status !== 'ok') {
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
		return response.data;
	} catch (error) {
		return new Error('Error with server');
	}
});

export const GetCurrentUserFromServerFX = createEffect(async (id: number) => {
	try {
		const { data: response } = await api.get(`/users/${id}`);
		return response.data;
	} catch (error) {
		throw new Error('Error with server');
	}
});
