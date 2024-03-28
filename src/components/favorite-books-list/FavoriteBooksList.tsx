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
      {books && books.map((book: IBook) => {
        return <Book key={book.id} book={book} beforeIcon={<ToFav id={book.id} />} afterIcon={<ToChat />} />
      }).reverse()}
    </>
  )
}