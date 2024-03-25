import { IBookOnShelf } from "../../interfaces/interface"
import Book from "../book/Book"
import EditBook from "../edit-book/EditBook"

type Props = {
  books: IBookOnShelf[]
}

export default function ShelfBooksList({ books }: Props) {

  console.log(books);

  return (
    <>
      {books && books.map((book: IBookOnShelf) => {
        console.log('log of book');
        return (<Book key={book.id} book={book} afterIcon={<EditBook />} />)
      })}
    </>
  )
}