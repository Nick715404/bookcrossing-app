import { IBook } from "../../interfaces/interface";
import { $sortedBooks } from "../../store/books";
import { useUnit } from "effector-react";
import { Div, Header, Text } from "@vkontakte/vkui";
import Book from "../book/Book";
import EmptyPlate from "../empty-plate/EmptyPlate";
import { Icon56SearchOutline } from "@vkontakte/icons";
import { vkGreyColor } from "../../constants/utils";
import ToFav from "../toFav/toFav";
import ToChat from "../toChat/toChat";

export default function SortedBookList() {
  const books: IBook[] = useUnit($sortedBooks);

  if (books.length === 0) {
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
      <Header mode="primary" style={{ marginBottom: '12px', fontSize: '20px' }}>Поиск по жанру: ...</Header>
      {
        books.length && (
          books.map((book: IBook) => (
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
