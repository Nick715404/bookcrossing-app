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

  return (
    <>
      <Header mode="primary" style={{ paddingBottom: '12px' }}>
        <span style={{ fontSize: '18px' }}>Новые</span>
      </Header>
      {books && books.map((book: IBook) => (
        <Book
          key={book.id}
          book={book}
          afterIcon={<ToFav id={book.id} />}
          beforeIcon={<ToChat />}
        />
      )).reverse()}
    </>
  )
}