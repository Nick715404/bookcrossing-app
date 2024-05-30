import { IBook } from "../../interfaces/interface";
import { $categoriesBooks, $sortedBooks } from "../../store/books";
import { vkGreyColor } from "../../constants/utils";

import EmptyPlate from "../empty-plate/EmptyPlate";

import { Icon56SearchOutline } from "@vkontakte/icons";
import { useUnit } from "effector-react";
import { Header } from "@vkontakte/vkui";
import { $favBooks } from "../../store/favorites";
import { checkBookInFavorites } from "../../utilities/books/books.utils";
import { Book, ToChatButton, ToFavButton } from "..";

export default function SortedBookList() {
  const data = useUnit($categoriesBooks);
  const favorites = useUnit($favBooks);

  if (data.books.length === 0) {
    return (
      <EmptyPlate
        icon={<Icon56SearchOutline fill={vkGreyColor} />}
        label="Перейти в каталог"
        location=""
        title="Кажется в этой категории | нет книг"
        text="Возможно вы найдете что искали в каталоге"
      />
    )
  }

  return (
    <>
      <Header mode="primary" style={{ marginBottom: '12px', fontSize: '20px' }}>Поиск по жанру: {data.title}</Header>
      {
        data.books.length && (
          data.books.map((book: IBook) => {
            const status = checkBookInFavorites(book, favorites);
            return (
              <Book
                key={book.id}
                afterIcon={<ToFavButton ownerId={book.owner} bookId={book.id} isFav={status} />}
                beforeIcon={<ToChatButton vkid={book.owner} />}
                book={book}
              />
            )
          })
        )
      }
    </>
  );
}
