import { IBook } from "../../interfaces/interface";
import { $sortedBooks } from "../../store/books";

import Book from "../book/Book";

import { useUnit } from "effector-react";
import { Div, Header, Text } from "@vkontakte/vkui";


export default function SortedBookList() {
  const data: any = useUnit($sortedBooks);

  return (
    <>
      <Header mode="primary" style={{ marginBottom: '12px', fontSize: '20px' }}>{data.category}</Header>
      {data.books.length > 0 ? (
        data.books.map((book: IBook) => (
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
