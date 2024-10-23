import { createEffect } from 'effector';
import { api } from '../../axios/axiosInstance';
import { IBook, TSuccessResponse } from '../../../types';

export const GetFavFromUserFX = createEffect(async (id: string) => {
	try {
		const { data: response }: { data: TSuccessResponse<IBook[]> } =
			await api.get(`/favorite/${id}`);
		console.log(response.data);
		return response.data;
	} catch (error) {
		throw new Error('Failed to fetch favorite from user!');
	}
});

export const PutBookToFavFX = createEffect(
	async ({ bookId, userId }: { bookId: string; userId: string }) => {
		try {
			const favoritesData = {
				bookId: bookId,
				userId: userId,
			};
			const { data } = await api.post('/favorites/put', favoritesData);
			console.log(data);
			return data;
		} catch (error) {
			throw new Error('Failed to put book into shelf!');
		}
	}
);

export const RemoveFromFavFX = createEffect(
	async ({ bookId, vkId }: { bookId: string; vkId: number }) => {
		const favoritesData = {
			bookId: bookId,
			userId: vkId,
		};

		try {
			const { data } = await api.post('/favorites/delete', favoritesData);
			return data;
		} catch (error: any) {
			throw new Error(error);
		}
	}
);
