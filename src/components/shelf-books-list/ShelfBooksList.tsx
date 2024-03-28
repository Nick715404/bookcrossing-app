import { useUnit } from "effector-react"
import { IBookOnShelf } from "../../interfaces/interface"
import Book from "../book/Book"
import EditBook from "../edit-book/EditBook"
import DeleteBook from "../delete-book/DeleteBook"
import { $booksOnShelf } from "../../store/shelf"
import React from "react"

function ShelfBooksList() {

  const books = useUnit($booksOnShelf);

  return (
    <>
      {books && books.map((book: IBookOnShelf) => {
        return (<Book
          key={book.id}
          book={book}
          afterIcon={<EditBook />}
          beforeIcon={<DeleteBook />}
        />)
      }).reverse()}
    </>
  )
}

export default React.memo(ShelfBooksList);