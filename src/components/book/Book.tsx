import ToShelf from "../toShelf/toFav";
import ToChat from "../toChat/toChat";

import { IBook } from "../../interfaces/interface";
import { selectBook } from "../../store/modalBook";
import { setStatusActiveModal } from "../../store/activeModal";

import {
  Div,
  SimpleCell,
  Image,
  Text,
  SplitLayout,
  ModalRoot,
} from "@vkontakte/vkui"

type Props = {
  book: IBook
}

export default function Book({ book }: Props) {

  const image = (
    <Image
      style={{ marginBottom: '0', marginTop: '0' }}
      className="book-img"
      size={96}
      borderRadius="m"
      src="/img/genres/genre1.jpg" />
  )

  const handleBook = () => {
    selectBook(book)
    setStatusActiveModal('modal');
  }

  return (
    <SplitLayout>
      <Div className="book" id={book.id}>
        <SimpleCell className="book-wrapper" before={image} onClick={() => handleBook()}>
          <Text className="book-title" weight="1">
            {book.title}
          </Text>
          <Text className="book-author book-info">
            {book.author ? book.author : 'Автор не найден'}
          </Text>
          <Text className="book-quality book-info">
            {book.state ? book.state : "не найдено"}
          </Text>
          <Text className="book-genre book-info">
            {book.categoryTitle ? book.categoryTitle : 'Нет жанра'}
          </Text>
        </SimpleCell>
      </Div >
      <ToShelf id={book.id} />
      <ToChat />
    </SplitLayout >
  )
}