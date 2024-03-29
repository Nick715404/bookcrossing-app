import { $booksWithCategory } from "../../store/categories";
import { $books } from "../../store/books";
import { useUnit } from "effector-react";
import { createEffect } from "effector";
import { IBook } from "../../interfaces/interface";

// export const categoriesBooksFX = createEffect();

export const categoriesBooksFX = (category: string, books: IBook[]) => {
  console.log(category);
  const sortedBooks = books.filter(item => item.categoryTitle === category)
  console.log(sortedBooks);
}