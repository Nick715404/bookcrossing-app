import { IBook } from "../../interfaces/interface";
import { createEffect } from "effector";

interface IFuncParams {
  category: string;
  books: IBook[];
}

export const sortBookFx = createEffect(({ category, books }: IFuncParams): IBook[] => {
  console.log(books);
  const arr = books.filter(item => item.categoryTitle === category);
  console.log(arr);
  return arr;
});

export const AddBooksToCategoryFX = createEffect(({ category, books }: IFuncParams) => {
  const arr = books.filter(item => item.categoryTitle === category);
  return {
    title: category,
    books: arr,
  };
})