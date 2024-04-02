import { useUnit } from "effector-react"
import { IBookOnShelf } from "../../interfaces/interface"
import Book from "../book/Book"
import EditBook from "../edit-book/EditBook"
import DeleteBook from "../delete-book/DeleteBook"
import { $booksOnShelf } from "../../store/shelf"
import React from "react"
import { Icon28BookOutline } from '@vkontakte/icons'
// import { FindBooksOnShelfFX } from "../../api/server/shelf/shelf"
// import { $user } from "../../store/user"
import EmptyPlate from "../epmty-plate/EmptyPlate"
import { vkBlueColor } from "../../constants/utils"

function ShelfBooksList() {

  const books = useUnit($booksOnShelf);

  return (
    <>
      {books.length > 0
        ?
        books.map((book: IBookOnShelf) => {
          return (<Book
            key={book.id}
            book={book}
            afterIcon={<EditBook />}
            beforeIcon={<DeleteBook bookId={book.id} />}
          />)
        }).reverse()
        :
        <EmptyPlate
          icon={<Icon28BookOutline fill={vkBlueColor} width={56} height={56} />}
          label='Добавить книгу'
          title='Добавляйте книги | и обменивайтесь ими'
          text='Здесь будут отображаться книги, которые вы добавите в каталог'
          location="create"
        />
      }
    </>
  )
}

export default React.memo(ShelfBooksList);