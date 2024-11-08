import { editBookFX } from '../api/server/books/books';
import { IBook } from '../types/interface';

export const handleEditBook = async (
	userId: string | undefined,
	formData: IBook
) => {
	const data = { ...formData, userId: userId };
	return await editBookFX(data);
};
