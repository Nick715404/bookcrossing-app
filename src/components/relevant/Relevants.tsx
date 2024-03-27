import { Header } from "@vkontakte/vkui"
import { IBook } from "../../interfaces/interface";
import { $books } from "../../store/books";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { getAllBooksFX } from "../../api/server/books/books";

import Book from "../book/Book"
import ToFav from "../toFav/toFav";
import ToChat from "../toChat/toChat";

export default function Relevants() {

  const books = useUnit($books);

  useEffect(() => {
    getAllBooksFX();
  }, [])

  return (
    <div>
      <Header mode="primary" style={{ paddingBottom: '12px' }}>
        Новые
      </Header>
      {/* Рендер компонента Book с прокидыванием в него данных с сервера в переменной book */}
      {books && books.map((book: IBook) => (
        <Book
          key={book.id}
          book={book}
          afterIcon={<ToFav id={book.id} />}
          beforeIcon={<ToChat />}
        />
      ))}
    </div>
  )
}