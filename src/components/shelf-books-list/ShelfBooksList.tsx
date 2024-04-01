import { useUnit } from "effector-react"
import { IBookOnShelf } from "../../interfaces/interface"
import Book from "../book/Book"
import EditBook from "../edit-book/EditBook"
import DeleteBook from "../delete-book/DeleteBook"
import { $booksOnShelf } from "../../store/shelf"
import React, { useEffect, useMemo } from "react"
import { FindBooksOnShelfFX } from "../../api/server/shelf/shelf"
import { $user } from "../../store/user"

function ShelfBooksList() {

  const [books, user] = useUnit([$booksOnShelf, $user]);

  return (
    <>
      {books && books.map((book: IBookOnShelf) => {
        return (<Book
          key={book.id}
          book={book}
          afterIcon={<EditBook />}
          beforeIcon={<DeleteBook bookId={book.id} />}
        />)
      }).reverse()}
    </>
  )
}

export default React.memo(ShelfBooksList);