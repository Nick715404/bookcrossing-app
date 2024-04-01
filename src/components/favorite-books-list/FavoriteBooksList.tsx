import { IBook } from "../../interfaces/interface";
import { $favBooks } from "../../store/favorites"
import { useUnit } from "effector-react"
import Book from "../book/Book";
import ToChat from "../toChat/toChat";
import ToFav from "../toFav/toFav";

export default function FavoriteBooksList() {

  const books = useUnit($favBooks);

  return (
    <>
      {books && books.map((book: IBook) => (
        <Book
          key={book.id}
          book={book}
          beforeIcon={<ToFav isFavorite id={book.id} />}
          afterIcon={<ToChat />}
        />
      )).reverse()}
    </>
  )
}