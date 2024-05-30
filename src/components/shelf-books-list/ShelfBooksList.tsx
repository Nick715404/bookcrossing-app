import { IBook } from "../../interfaces/interface"
import { vkGreyColor } from "../../constants/utils"
import { useGetBooksOnShelf } from "../../hooks/useGetBooksOnShelf"
import { BooksSkeleton } from "../Skeletons/BooksSkeletons/BookSkeleton"
import { $books, GetAllBooksPipeFX } from "../../store/books"

import EmptyPlate from "../empty-plate/EmptyPlate"

import { Icon28BookOutline } from '@vkontakte/icons'
import React, { useEffect } from "react"
import { useUnit } from "effector-react"
import { Book } from "../Book/Book"
import { DeleteBookButton, EditBookButton } from "../BooksButtons"

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
      {isLoading && <BooksSkeleton />}
      {
        isSuccess &&
        books.map((book: IBook) => {
          return (
            <Book
              key={book.id}
              book={book}
              afterIcon={<EditBookButton bookId={book.id} />}
              beforeIcon={<DeleteBookButton bookId={book.id} />}
            />
          )
        }).reverse()
      }
    </>
  )
}

export default React.memo(ShelfBooksList);