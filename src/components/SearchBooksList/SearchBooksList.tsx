import { $books, $searchBooks } from "../../store/books";
import { IBook } from "../../interfaces/interface";
import { vkBlueColor } from "../../constants/utils";

import Book from "../book/Book";
import ToFav from "../toFav/toFav";
import ToChat from "../toChat/toChat";
import EmptyPlate from "../empty-plate/EmptyPlate";

import { Icon28BookOutline } from '@vkontakte/icons';

interface IProps {
  data: IBook[] | undefined;
  isSuccess: boolean;
}

const SearchBooksList = ({ data, isSuccess }: IProps) => {

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

  return (
    <>
      {
        isSuccess && data && data.map((book: IBook) => (
          <Book
            afterIcon={<ToFav bookId={book.id} isFav={book.favourite} />}
            beforeIcon={<ToChat vkid={book.owner} />}
            book={book}
            key={book.id} />
        ))
      }
    </>
  )
}

export { SearchBooksList };