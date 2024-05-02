import { IBook } from "../../interfaces/interface";
import { createEffect } from "effector";

interface IFuncParams {
  category: string;
  books: IBook[];
}

export const sortBookFx = createEffect(({ category, books }: IFuncParams): IBook[] => {
  const arr = books.filter(item => item.categoryTitle === category);
  return arr;
});

export const AddBooksToCategoryFX = createEffect(({ category, books }: IFuncParams) => {
  const arr = books.filter(item => item.categoryTitle === category);
  return {
    title: category,
    books: arr,
  };
});

export const CheckBookInFavPipeFX = createEffect((bookId: string) => {
  return bookId;
});