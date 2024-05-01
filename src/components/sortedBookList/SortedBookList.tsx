import { IBook } from "../../interfaces/interface";
import { $categoriesBooks, $sortedBooks } from "../../store/books";
import { vkGreyColor } from "../../constants/utils";

import Book from "../book/Book";
import EmptyPlate from "../empty-plate/EmptyPlate";
import ToFav from "../toFav/toFav";
import ToChat from "../toChat/toChat";

import { Icon56SearchOutline } from "@vkontakte/icons";
import { useUnit } from "effector-react";
import { Header } from "@vkontakte/vkui";

export default function SortedBookList() {
  const data = useUnit($categoriesBooks);

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
          data.books.map((book: IBook) => (
            <Book
              key={book.id}
              afterIcon={<ToFav bookId={book.id} isFav={book.favourite} />}
              beforeIcon={<ToChat vkid={book.owner} />}
              book={book}
            />
          ))
        )
      }
    </>
  );
}
