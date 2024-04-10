import { $searchBooks } from "../../store/books";
import { IBook } from "../../interfaces/interface";
import { Icon28BookOutline } from '@vkontakte/icons';

import Book from "../book/Book";

import { useUnit } from "effector-react";
import EmptyPlate from "../empty-plate/EmptyPlate";
import { vkBlueColor } from "../../constants/utils";

const SearchBooksList = () => {

  const books = useUnit($searchBooks);

  return (
    <>
      {books.length ? books.map((book: IBook) => (
        <Book afterIcon beforeIcon book={book} key={book.id} />
      )) : <EmptyPlate
        text="Возможно вас заинтересуют другие книги"
        title="Книги по вашему запросу | не найдены"
        location="catalog"
        label="Перейти в каталог"
        icon={<Icon28BookOutline style={{ width: 56, height: 56 }} fill={vkBlueColor} />} />
      }
    </>
  )
}

export { SearchBooksList };