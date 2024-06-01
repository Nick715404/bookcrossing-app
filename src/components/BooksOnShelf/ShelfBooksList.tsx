import { IBook } from "../../interfaces/interface"
import { useGetBooksOnShelf } from "../../hooks/useGetBooksOnShelf"
import { $books, GetAllBooksPipeFX } from "../../store/books"
import { Book } from "../Book/Book"
import { DeleteBookButton, EditBookButton } from "../BooksButtons"
import { Fragment, useEffect } from "react"
import { useUnit } from "effector-react"
import EmptyPlate from "../empty-plate/EmptyPlate"
import { Icon28BookOutline } from "@vkontakte/icons"
import { vkGreyColor } from "../../constants/utils"

export function ShelfBooksList() {
  const { data, isSuccess } = useGetBooksOnShelf();
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
    <Fragment>
      {
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
    </Fragment>
  );
};