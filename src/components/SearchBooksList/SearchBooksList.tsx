import { IBook } from "../../interfaces/interface";
import { vkGreyColor } from "../../constants/utils";

import ToFav from "../toFav/toFav";
import ToChat from "../toChat/toChat";
import EmptyPlate from "../empty-plate/EmptyPlate";

import { BookSkeleton } from "../Skeletons/BookSkeleton";
import { checkBookInFavorites } from "../../utilities/books/books.utils";
import { $favBooks } from "../../store/favorites";
import { Icon28BookOutline } from '@vkontakte/icons';
import { useUnit } from "effector-react";
import { Book } from "../book/Book";

interface IProps {
  data: IBook[] | undefined;
  isSuccess: boolean;
  isLoading: boolean;
}

const SearchBooksList = ({ data, isSuccess, isLoading }: IProps) => {
  const favorites = useUnit($favBooks);

  if (isSuccess && data && data.length === 0) {
    return (
      <EmptyPlate
        text="Возможно вас заинтересуют другие книги"
        title="Книги по вашему запросу | не найдены"
        location="catalog"
        label="Перейти в каталог"
        icon={<Icon28BookOutline style={{ width: 56, height: 56 }} fill={vkGreyColor} />}
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
        isSuccess && data && data.map((book: IBook) => {
          const status = checkBookInFavorites(book, favorites);
          return (
            <Book
              afterIcon={<ToFav ownerId={book.owner} bookId={book.id} isFav={status} />}
              beforeIcon={<ToChat vkid={book.owner} />}
              book={book}
              key={book.id} />
          )
        })
      }
    </>
  )
}

export { SearchBooksList };