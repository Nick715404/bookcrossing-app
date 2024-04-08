import { IBook } from "../../interfaces/interface";
import { $favBooks } from "../../store/favorites"
import { vkBlueColor } from "../../constants/utils";

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
            beforeIcon={<ToFav isFavorite id={book.id} />}
            afterIcon={<ToChat />}
          />
        )).reverse()
        :
        <EmptyPlate
          icon={<Icon28BookmarkCheckOutline fill={vkBlueColor} width={56} height={56} />}
          title="Сохраняйте книги | в понравившиеся"
          text="Здесь будут отображаться книги, которые вы отметили как понравившиеся"
          label="Перейти в каталог"
          location=""
        />
      }
    </>
  )
}

