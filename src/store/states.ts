import { createEffect, createEvent, createStore } from "effector";
import { CheckBookInFavPipeFX } from "../utilities/category/category.utils";

const showSnackbarFX = createEvent<{ text: string; icon: any; duration: number }>();
const hideShackbarFX = createEvent();

const initialState = {
  text: '',
  icon: null,
  duration: 0,
};

const $snackbar = createStore(initialState)
  .on(showSnackbarFX, (_, snackbar) => {
    return snackbar;
  })
  .reset(hideShackbarFX);

const $favoriteBooks = createStore<string[]>([]);

const GetBookIdToArrayFX = createEffect((bookId: string) => {
  return bookId;
});

$favoriteBooks.on(GetBookIdToArrayFX.doneData, (books, newBook) => [...books, newBook]);


export { $snackbar, showSnackbarFX, hideShackbarFX, GetBookIdToArrayFX };