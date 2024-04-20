import { IExtendedBook } from "../../interfaces/interface"
import { vkGreyColor } from "../../constants/utils"
import { useGetBooksOnShelf } from "../../hooks/useGetBooksOnShelf"
import { BookSkeleton } from "../Skeletons/BookSkeleton"

import Book from "../book/Book"
import EditBook from "../edit-book/EditBook"
import DeleteBook from "../delete-book/DeleteBook"
import EmptyPlate from "../empty-plate/EmptyPlate"

import { Icon28BookOutline } from '@vkontakte/icons'
import React from "react"

function ShelfBooksList() {
  const { data, isSuccess, isLoading } = useGetBooksOnShelf();

  if (isSuccess && data && data.length === 0) {
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
        isSuccess && data &&
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