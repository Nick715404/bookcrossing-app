import { Header } from "@vkontakte/vkui"
import { IBook } from "../../interfaces/interface";
import { $books } from "../../store/books";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { getAllBooksFX } from "../../api/server/books/books";

import Book from "../book/Book"

export default function Relevants() {

  const books = useUnit($books);

  useEffect(() => {
    getAllBooksFX();
  }, [])

  const fake: IBook = {
    id: 'adashduaho8',
    genreId: 'детектив',
    isbn: '81004-2312-12',
    state: 'Хорошее',
    title: 'Обычная книга с обычным названием',
    authorId: 'Конан Дудель',
  }

  return (
    <div>
      <Header mode="primary">
        Новые
      </Header>
      {/* Рендер компонента Book с прокидыванием в него данных с сервера в переменной book */}
      {/* {books && books.map((book: IBook) => (
        <Book key={book.id} book={book} />
      ))} */}
      <Book book={fake} />
      <Book book={fake} />
      <Book book={fake} />
      <Book book={fake} />
    </div>
  )
}