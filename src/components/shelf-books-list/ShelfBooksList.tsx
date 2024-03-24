import { IBookOnShelf } from "../../interfaces/interface"
import BookOnShelf from "../book-on-shelf/BookOnShelf"

type Props = {
  books: IBookOnShelf[]
}

export default function ShelfBooksList({ books }: Props) {
  return (
    <>
      {books && books.map((book: IBookOnShelf) => (
        <BookOnShelf book={book} />
      ))}
    </>
  )
}