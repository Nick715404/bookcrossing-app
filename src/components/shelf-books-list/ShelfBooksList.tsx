import { useUnit } from "effector-react"
import { IExtendedBook } from "../../interfaces/interface"
import Book from "../book/Book"
import EditBook from "../edit-book/EditBook"
import DeleteBook from "../delete-book/DeleteBook"
import { $booksOnShelf } from "../../store/shelf"
import EmptyPlate from "../empty-plate/EmptyPlate"
import { vkGreyColor } from "../../constants/utils"

import { Icon28BookOutline } from '@vkontakte/icons'
import React from "react"
import { useQuery } from "react-query"
import { findBooksOnShelf } from "../../api/server/books/books.query"
import { $user } from "../../store/user"
import { useGetBooksOnShelf } from "../../hooks/useGetBooksOnShelf"

function ShelfBooksList() {

  const [books, user] = useUnit([$booksOnShelf, $user]);

  const { data, isSuccess } = useGetBooksOnShelf();

  if (isSuccess && data.length === 0) {
    return (
      <EmptyPlate
        icon={<Icon28BookOutline fill={vkGreyColor} width={56} height={56} />}
        label='Добавить книгу'
        title='Добавляйте книги | и обменивайтесь ими'
        text='Здесь будут отображаться книги, которые вы добавите в каталог'
        location="create"
      />
    )
  }

  return (
    <>
      {isSuccess &&
        data.map((book: IExtendedBook) => {
          return (
            <Book
              key={book.id}
              book={book}
              afterIcon={<EditBook bookId={book.id} />}
              beforeIcon={<DeleteBook bookId={book.id} />}
            />
          )
        }).reverse()
      }
    </>
  )
}

export default React.memo(ShelfBooksList);