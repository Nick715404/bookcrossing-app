import { IBook } from "../../interfaces/interface"
import { vkGreyColor } from "../../constants/utils"
import { useGetBooksOnShelf } from "../../hooks/useGetBooksOnShelf"
import { BookSkeleton } from "../Skeletons/BookSkeleton"
import { $books, GetAllBooksPipeFX } from "../../store/books"

import EditBook from "../edit-book/EditBook"
import DeleteBook from "../delete-book/DeleteBook"
import EmptyPlate from "../empty-plate/EmptyPlate"

import { Icon28BookOutline } from '@vkontakte/icons'
import React, { useEffect } from "react"
import { useUnit } from "effector-react"
import { Book } from "../book/Book"

function ShelfBooksList() {
  const { data, isSuccess, isLoading } = useGetBooksOnShelf();
  const books = useUnit($books);

  useEffect(() => {
    if (isSuccess && data) GetAllBooksPipeFX(data);
  }, [isSuccess, data]);

  if (isSuccess && books.length === 0) {
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
      {isLoading && <BookSkeleton />}
      {
        isSuccess &&
        books.map((book: IBook) => {
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