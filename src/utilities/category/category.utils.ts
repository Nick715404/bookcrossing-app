import { IBook } from "../../interfaces/interface";
import { createEffect } from "effector";

interface IFuncParams {
  category: string;
  books: IBook[];
}

export const sortBookFx = createEffect(({ category, books }: IFuncParams): IBook[] => {
  const arr = books.filter(item => item.categoryTitle === category);
  return arr;
})