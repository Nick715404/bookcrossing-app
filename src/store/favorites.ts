import { GetFavFromUserFX } from "../api/server/favorites.query";
import { IBook } from "../interfaces/interface";
import { CheckBookInFavPipeFX } from "../utilities/category/category.utils";
import { createEffect, createEvent, createStore } from "effector";

// - Stores
export const $favBooks = createStore<IBook[]>([]);
export const $favoritesStatus = createStore<string>('');
export const $favoriteStatus = createStore<boolean>(false);

// - Effects
export const EditArrayFX = createEvent<{ id: string, favourite: string }>();
export const PutBookInFavFX = createEffect((data: IBook) => data);
export const GetAllBooksFromFavFX = createEffect((data: IBook[]) => data);
export const DeleteBookFromFavPipeFX = createEffect((data: IBook) => data);

// - Store manipulation
// $favBooks.on(GetAllBooksFromFavFX.doneData, (_, newBooks) => newBooks);
$favBooks.on(GetFavFromUserFX.doneData, (_, newBooks) => newBooks);
$favBooks.on(PutBookInFavFX.doneData, (books, newBook) => {
  newBook.favourite = 'true';
  return [...books, newBook];
});
$favBooks.on(DeleteBookFromFavPipeFX.doneData, (books, newBook) => {
  const newBooks = books.filter(item => item.id !== newBook.id);
  return [...newBooks];
});
$favoriteStatus.on(CheckBookInFavPipeFX.doneData, (_, action) => {
  const favBooks = $favBooks.getState();
  const isFavorite = isBookInFavorites(favBooks, action);
  return isFavorite;
});

function isBookInFavorites(favBooks: IBook[], state: string) {
  return favBooks.some(book => book.favourite === state);
};