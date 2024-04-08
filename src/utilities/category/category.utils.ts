import { createEffect } from "effector";
import { IBook } from "../../interfaces/interface";

interface IFuncParams {
  category: string;
  books: IBook[];
}

export const categoriesBooksFX = createEffect(({ category, books }: IFuncParams): IBook[] => {
  const arr = books.filter(item => item.categoryTitle === category);
  return arr;
})