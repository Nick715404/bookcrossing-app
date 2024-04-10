import { IBook } from "../../interfaces/interface";
import { $sortedBooks } from "../../store/books";
import { useUnit } from "effector-react";
import { Div, Header, Text } from "@vkontakte/vkui";
import Book from "../book/Book";

export default function SortedBookList() {
  const books: IBook[] = useUnit($sortedBooks);

  return (
    <>
      <Header mode="primary" style={{ marginBottom: '12px', fontSize: '20px' }}>Поиск по жанру: ...</Header>
      {books.length ? (
        books.map((book: IBook) => (
          <Book key={book.id} afterIcon beforeIcon book={book} />
        ))
      ) : (
        <Div>
          <Text style={{ textAlign: 'center', marginBottom: '30px' }}>Ой, кажется что-то пошло не так!</Text>
        </Div>
      )}
    </>
  );
}
