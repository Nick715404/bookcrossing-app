import { useUnit } from "effector-react"
import { IBookOnShelf } from "../../interfaces/interface"
import Book from "../book/Book"
import EditBook from "../edit-book/EditBook"
import { $books } from "../../store/books"
import DeleteBook from "../delete-book/DeleteBook"

export default function ShelfBooksList() {

  const books = useUnit($books);

  return (
    <>
      {books && books.map((book: any) => {
        return (<Book 
          key={book.id} 
          book={book} 
          afterIcon={<EditBook />}
          beforeIcon={<DeleteBook />}
          />)
      })}
    </>
  )
}