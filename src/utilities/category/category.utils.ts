import { IBook } from "../../interfaces/interface";

export const categoriesBooksFX = (category: string, books: IBook[]) => {
  console.log(category);
  const sortedBooks = books.filter(item => item.categoryTitle === category)
  console.log(sortedBooks);
}