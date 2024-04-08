import { initialStateSelectedBook } from "../constants/utils";
import { IBook } from "../interfaces/interface";
import { createEvent, createStore } from "effector";

export const $selectedBook = createStore<IBook>(initialStateSelectedBook);
export const selectBook = createEvent<IBook>();

$selectedBook.on(selectBook, (_, book) => book);
