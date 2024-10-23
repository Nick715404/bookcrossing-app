import { IBook } from '../types/interface';

import { createEffect } from 'effector';

export const handleFormValidation = (author: string, errors: any) => {
	if (!author.trim()) {
		errors.author = 'Поле "Автор" обязательно для заполнения';
	} else if (!/^([А-ЯЁ]\.[А-ЯЁ]\.\s[А-ЯЁ][а-яё]+)$/.test(author.trim())) {
		errors.author = 'Введите ФИО в формате: О.И. Фамилия';
	}
};

export const MoveBooksToStoreFX = createEffect(async (data: IBook[]) => {
	return data;
});

export const isAnyBookInFavorites = (books: IBook[], favorites: IBook[]) => {
	return books.some(book => {
		return favorites.some(favBook => favBook.id === book.id);
	});
};

export const checkBookInFavorites = (book: IBook, favorites: IBook[]) => {
	return favorites.some(item => {
		return item.id === book.id;
	});
};
