import { IBook } from "../../interfaces/interface";
import { $sortedBooks } from "../../store/books";

import Book from "../book/Book";

import { useUnit } from "effector-react";
import { Div, Group, Header, Text } from "@vkontakte/vkui";


export default function SortedBookList() {
  const books = useUnit($sortedBooks);

  return (
    <Group style={{ paddingTop: '30px' }}>
      <Header style={{ marginBottom: '12px' }}>Жанр</Header>
      {books.length > 0 ? (
        books.map((book: IBook) => (
          <Book key={book.id} afterIcon beforeIcon book={book} />
        ))
      ) : (
        <Div>
          <Text style={{ textAlign: 'center' }}>Ой, кажется что-то пошло не так!</Text>
        </Div>
      )}
    </Group>
  );
}
