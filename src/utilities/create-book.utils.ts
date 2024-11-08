import { createBookFX } from '../api/server/books/books';
import { IDataState } from '../types/interface';

export const handleCreateBook = async (
	userId: string,
	formData: IDataState
) => {
	const data = { ...formData, userId: userId };
	return await createBookFX(data);
};
