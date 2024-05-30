import { Book } from "../";
import { ToChatButton, ToFavButton } from "../BooksButtons";
import { checkBookInFavorites } from "../../utilities/books/books.utils";
import { $books } from "../../store/books";
import { $favBooks } from "../../store/favorites";
import { IBook } from "../../interfaces/interface";
import { Fragment } from "react/jsx-runtime";
import { useUnit } from "effector-react";

export function CatalogBookList() {
  const [books, favorites] = useUnit([$books, $favBooks]);

  return (
    <Fragment>
      {
        books.map((book: IBook) => {
          const check = checkBookInFavorites(book, favorites);
          return (
            <Book
              key={book.id}
              book={book}
              afterIcon={<ToFavButton ownerId={book.owner} bookId={book.id} isFav={check} />}
              beforeIcon={<ToChatButton vkid={book.owner} />}
            />
          )
        }).reverse()
      }
    </Fragment>
  );
};