import { createEffect } from "effector";
import { IBook } from "../../interfaces/interface";

interface IFuncParams {
  category: string;
  books: IBook[];
}

export const categoriesBooksFX = createEffect(({ category, books }: IFuncParams) => {
  console.log(category);
  const sortedBooks = books.filter(item => item.categoryTitle === category)
  console.log(sortedBooks);
  return sortedBooks;
}
)