import { categoriesBooksInitState } from "../constants/categories";
import { IBook, ICategoriesBooksStore } from "../interfaces/interface";
import { AddBooksToCategoryFX, CheckBookInFavPipeFX, sortBookFx } from "../utilities/category/category.utils";
import { createEffect, createEvent, createStore } from "effector";
import { PutBookInFavFX } from "./favorites";

// - Stores
export const $searchBooks = createStore<IBook[]>([]);
export const $books = createStore<IBook[]>([]);
export const $sortedBooks = createStore<IBook[]>([]);
export const $createBookStatus = createStore<boolean>(false);
export const $categoriesBooks = createStore<ICategoriesBooksStore>(categoriesBooksInitState);

// - Effects
export const ChangeArrayFX = createEvent<{ id: string, favourite: string }>();
export const GetAllBooksPipeFX = createEffect((data: IBook[]) => data);
export const DeleteBookPipeFX = createEffect((book: IBook) => book);
export const CreateBookPipeFX = createEffect((book: IBook) => book);
export const ChangeBookStatus = createEffect((res: boolean) => res);

// - Store manipulation
$createBookStatus.on(ChangeBookStatus.doneData, (_, action) => action);
$books.on(GetAllBooksPipeFX.doneData, (_, newBooks) => newBooks);
$books.on(CreateBookPipeFX.doneData, (books, newBook) => [...books, newBook]);
$books.on(DeleteBookPipeFX.doneData, (book, newBook) => {
  const newBooks = book.filter(item => item.id !== newBook.id);
  return [...newBooks]
});
$books.on(ChangeArrayFX, (books, { id, favourite }) => {
  return books.map(book => {
    if (book.id === id) {
      return { ...book, favourite: favourite };
    }
    return book;
  });
});
$sortedBooks.on(sortBookFx.doneData, (_, newBooks) => [...newBooks])
$categoriesBooks.on(AddBooksToCategoryFX.doneData, (_, action) => action);