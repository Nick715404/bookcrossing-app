import { $searchBooks } from "../../store/books";
import { IBook } from "../../interfaces/interface";

import Book from "../book/Book";

import { useUnit } from "effector-react";

const SearchBooksList = () => {

  const books = useUnit($searchBooks);

  return (
    <>
      {books.length && books.map((book: IBook) => (
        <Book afterIcon beforeIcon book={book} key={book.id} />
      ))}
    </>
  )
}

export { SearchBooksList };