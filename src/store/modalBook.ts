import { initialStateSelectedBook } from "../constants/utils";
import { IBook } from "../interfaces/interface";
import { createEffect, createEvent, createStore } from "effector";

export const $selectedBook = createStore<IBook>(initialStateSelectedBook);
export const $currentBookId = createStore<string>('');

export const selectBookFX = createEvent<IBook>();

export const GetCurrentBookIdFX = createEffect((id: string): string => {
  return id;
})

$selectedBook.on(selectBookFX, (_, book) => book);

$currentBookId.on(GetCurrentBookIdFX.doneData, (_, action) => action);