import { TBook, TSuccessResponse } from '../../../types';
import { IBook, ICreateBook, IShelfInfo } from '../../../types/interface';
import { api } from '../../axios/axiosInstance';

type TInfinteBookFetching = {
	books: TBook[] | [];
	limit: string;
	page: string;
	total: number;
};

export const fetchBooks = async ({ pageParam = 1 }) => {
	try {
		const { data: response } = await api.get<
			TSuccessResponse<TInfinteBookFetching>
		>(`/books?page=${pageParam}&limit=5`);

		return {
			books: response.data.books,
			nextPage:
				+response.data.page <
				Math.ceil(response.data.total / +response.data.limit)
					? Number(response.data.page) + 1
					: undefined,
		};
	} catch (error) {
		throw new Error('Error while fetching books!');
	}
};

export const createBook = async (book: ICreateBook): Promise<IBook> => {
	try {
		console.log(book);
		const { data: response } = await api.post('/books', book);
		console.log(response);
		return response;
	} catch (error) {
		throw new Error('Failed to create book!');
	}
};

export const findBooksOnShelf = async (userId: string) => {
	try {
		const { data } = await api.get(`/shelf/${userId}`);
		const shelf: IShelfInfo = data;
		const shelfBooks = shelf.books;
		return shelfBooks;
	} catch (error) {
		throw new Error('Failed to fetch books on shelf!');
	}
};

export const deleteBook = async (id: string) => {
	try {
		const { data } = await api.delete(`/book/delete/${id}`);
		const deletedBook: IBook = data;
		return deletedBook;
	} catch (error) {
		throw new Error('Failed to delete book!');
	}
};

export const putBookInFavorites = async (bookId: string, userId: string) => {
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
};
