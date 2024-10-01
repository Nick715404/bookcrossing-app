import { IBook, ICreateBook, IShelfInfo } from '../../../interfaces/interface';
import { api } from '../../axios/axiosInstance';

export const fetchBooks = async () => {
	try {
		const { data } = await api.get('/book/all');
		const fetchedData: IBook[] = data;
		return fetchedData;
	} catch (error) {
		throw new Error('Error to fetch all books!');
	}
};

export const createBook = async (book: ICreateBook): Promise<IBook> => {
	try {
		console.log(book);
		const { data } = await api.post('/book/create', book);
		return data;
	} catch (error) {
		throw new Error('Failed to create book!');
	}
};

export const findBooksOnShelf = async (userId: string) => {
	try {
		const { data } = await api.get(`/shelf/find/${userId}`);
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
		return data;
	} catch (error) {
		throw new Error('Failed to put book into shelf!');
	}
};
