import { initialStateSelectedBook } from '../constants/utils';
import { TBook } from '../types';
import { IBook } from '../types/interface';
import { createEffect, createEvent, createStore } from 'effector';

export const $selectedBook = createStore<TBook>(initialStateSelectedBook);
export const $currentBookId = createStore<string>('');

export const selectBookFX = createEvent<TBook>();

export const GetCurrentBookIdFX = createEffect((id: string): string => {
	return id;
});

$selectedBook.on(selectBookFX, (_, book) => book);

$currentBookId.on(GetCurrentBookIdFX.doneData, (_, action) => action);
