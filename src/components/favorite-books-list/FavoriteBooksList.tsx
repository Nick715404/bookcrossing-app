import { Book, ToChatButton, ToFavButtonReverse } from "..";


import { IBook } from "../../interfaces/interface";
import { vkGreyColor } from "../../constants/utils";
import EmptyPlate from "../empty-plate/EmptyPlate";
import { $favBooks } from "../../store/favorites";
import { useUnit } from "effector-react"
import { Icon28BookmarkCheckOutline } from '@vkontakte/icons';

export default function FavoriteBooksList() {
  const books = useUnit($favBooks);

  if (books.length === 0) {
    return (
      <EmptyPlate
        icon={<Icon28BookmarkCheckOutline fill={vkGreyColor} width={56} height={56} />}
        title="Сохраняйте книги | в понравившиеся"
        text="Здесь будут отображаться книги, которые вы отметили как понравившиеся"
        label="Перейти в каталог"
        location=""
      />
    );
  };

  return (
    <>
      {
        books && books.map((book: IBook) => (
          <Book
            key={book.id}
            book={book}
            beforeIcon={<ToFavButtonReverse bookId={book.id} />}
            afterIcon={<ToChatButton vkid={book.owner} />}
          />
        )).reverse()
      }
    </>
  )
}

