import { vkGreyColor } from "../../constants/utils";
import { IBook } from "../../interfaces/interface";

import ToFav from "../toFav/toFav";
import ToChat from "../toChat/toChat";
import EmptyPlate from "../empty-plate/EmptyPlate";
import Book from "../book/Book";

import { BookSkeleton } from "../Skeletons/BookSkeleton";
import { useFetchBooks } from "../../hooks/useFetchBooks";

import { Icon28AllCategoriesOutline } from "@vkontakte/icons";
import { $books, GetAllBooksPipeFX } from "../../store/books";
import { useUnit } from "effector-react";
import { useEffect } from "react";

export default function CatalogBookList() {
  const books = useUnit($books);
  const { data, isLoading, isSuccess } = useFetchBooks();

  useEffect(() => {
    if (isSuccess) GetAllBooksPipeFX(data);
  }, [data, isSuccess]);

  if (isSuccess && data.length === 0) {
    return (
      <EmptyPlate
        icon={<Icon28AllCategoriesOutline fill={vkGreyColor} width={56} height={56} />}
        title="Здесь будут отображаться | все книги приложения"
        text="Создайте карточку книги и она отобразится в каталоге"
        label="Добавить книгу"
        location="create"
      />
    )
  }

  return (
    <>
      {isLoading && <BookSkeleton />}
      {
        isSuccess && books.map((book: IBook, index: number) => (
          <Book
            key={book.id}
            book={book}
            afterIcon={<ToFav bookId={book.id} isFav={book.favourite} />}
            beforeIcon={<ToChat vkid={book.owner} />}
          />
        )).reverse()
      }
    </>
  )
}