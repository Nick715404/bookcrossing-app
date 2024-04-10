import { createEffect } from "effector";
import { IBook } from "../../interfaces/interface";

interface IParams {
  searchText: string;
  listOfBooks: IBook[];
}

export const searchHandlerFX = createEffect(({ searchText, listOfBooks }: IParams) => {
  if (!searchText) {
    return listOfBooks;
  }
  const normalizedSearchText = searchText.toLowerCase();
  return listOfBooks.filter(({ title, isbn, author, categoryTitle }) => {
    return (
      title.toLowerCase().includes(normalizedSearchText) ||
      isbn.toLowerCase().includes(normalizedSearchText) ||
      author?.toLowerCase().includes(normalizedSearchText) ||
      categoryTitle?.toLowerCase().includes(normalizedSearchText)
    );
  });
})
