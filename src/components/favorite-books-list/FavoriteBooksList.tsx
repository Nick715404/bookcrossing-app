import { IBook, IExtendedBook } from "../../interfaces/interface";
import { $favBooks } from "../../store/favorites"
import { vkGreyColor } from "../../constants/utils";

import Book from "../book/Book";
import ToChat from "../toChat/toChat";
import ToFav from "../toFav/toFav";
import EmptyPlate from "../empty-plate/EmptyPlate";

import { useUnit } from "effector-react"
import { Icon28BookmarkCheckOutline } from '@vkontakte/icons';

export default function FavoriteBooksList() {

  const books = useUnit($favBooks);

  return (
    <>
      {books.length > 0
        ?
        books.map((book: IBook) => (
          <Book
            key={book.id}
            book={book}
            beforeIcon={<ToFav isFav={book.favourite} bookId={book.id} />}
            afterIcon={<ToChat vkid={book.owner} />}
          />
        )).reverse()
        :
        <EmptyPlate
          icon={<Icon28BookmarkCheckOutline fill={vkGreyColor} width={56} height={56} />}
          title="Сохраняйте книги | в понравившиеся"
          text="Здесь будут отображаться книги, которые вы отметили как понравившиеся"
          label="Перейти в каталог"
          location=""
        />
      }
    </>
  )
}

