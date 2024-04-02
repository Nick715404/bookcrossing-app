import { IBook } from "../../interfaces/interface";
import { $books } from "../../store/books";

import Book from "../book/Book"
import ToFav from "../toFav/toFav";
import ToChat from "../toChat/toChat";
import EmptyPlate from "../epmty-plate/EmptyPlate";

import { useUnit } from "effector-react";
import { Header } from "@vkontakte/vkui"
import { Icon28AllCategoriesOutline } from '@vkontakte/icons';
import { vkBlueColor } from "../../constants/utils";

export default function Relevants() {

  const books = useUnit($books);

  return (
    <>
      <Header mode="primary" style={{ paddingBottom: '12px' }}>
        <span style={{ fontSize: '18px' }}>Новые</span>
      </Header>
      {books.length > 0
        ?
        books.map((book: IBook) => (
          <Book
            key={book.id}
            book={book}
            afterIcon={<ToFav id={book.id} />}
            beforeIcon={<ToChat />}
          />
        )).reverse()
        :
        <EmptyPlate
          icon={<Icon28AllCategoriesOutline fill={vkBlueColor} width={56} height={56} />}
          title="Здесь будут отображаться | все книги приложения"
          text="Добавьте свою книгу и она отобразится в каталоге"
          label="Создать книгу"
          location="create"
        />
      }
    </>
  )
}