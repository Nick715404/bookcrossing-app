import { IBook } from "../../interfaces/interface";

import { createEffect } from "effector";

export const MoveBooksToStoreFX = createEffect(async (data: IBook[]) => {
  return data;
});

export const isAnyBookInFavorites = (books: IBook[], favorites: IBook[]) => {
  return books.some((book) => {
    return favorites.some((favBook) => favBook.id === book.id);
  });
};

export const checkBookInFavorites = (book: IBook, favorites: IBook[]) => {
  return favorites.some((item) => {
    return item.id === book.id;
  });
};