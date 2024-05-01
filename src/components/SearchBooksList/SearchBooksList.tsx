import { $books, $searchBooks } from "../../store/books";
import { IBook } from "../../interfaces/interface";
import { vkBlueColor } from "../../constants/utils";

import Book from "../book/Book";
import ToFav from "../toFav/toFav";
import ToChat from "../toChat/toChat";
import EmptyPlate from "../empty-plate/EmptyPlate";

import { Icon28BookOutline } from '@vkontakte/icons';
import { BookSkeleton } from "../Skeletons/BookSkeleton";

interface IProps {
  data: IBook[] | undefined;
  isSuccess: boolean;
  isLoading: boolean;
}

const SearchBooksList = ({ data, isSuccess, isLoading }: IProps) => {

  if (isSuccess && data && data.length === 0) {
    return (
      <EmptyPlate
        text="Возможно вас заинтересуют другие книги"
        title="Книги по вашему запросу | не найдены"
        location="catalog"
        label="Перейти в каталог"
        icon={<Icon28BookOutline style={{ width: 56, height: 56 }} fill={vkBlueColor} />}
      />
    )
  }

  if (isLoading) {
    return (
      <BookSkeleton />
    )
  }

  return (
    <>
      {
        isSuccess && data && data.map((book: IBook) => (
          <Book
            afterIcon={<ToFav ownerId={book.owner} bookId={book.id} isFav={book.favourite} />}
            beforeIcon={<ToChat vkid={book.owner} />}
            book={book}
            key={book.id} />
        ))
      }
    </>
  )
}

export { SearchBooksList };