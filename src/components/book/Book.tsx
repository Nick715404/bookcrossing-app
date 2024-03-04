import {
  Div,
  SimpleCell,
  Image,
  Text,
  SplitLayout,
} from "@vkontakte/vkui"

import ToShelf from "../toShelf/toShelf";
import ToChat from "../toChat/toChat";

import { IBook } from "../../interfaces/interface";

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
      src="https://fashionelite.com/wp-content/uploads/2016/09/1331144712_IMG_paris1.jpg" />
  )

  return (
    <SplitLayout id={book.id}>
      <Div className="book">
        <SimpleCell className="book-wrapper" before={image}>
          <Text
            weight="1"
            className="book-title">
            {book.title}
          </Text>
          <Text className="book-author book-info">
            {book.authorId ? null : 'Автор не найден'}
          </Text>
          <Text className="book-quality book-info">
            {book.state}
          </Text>
          <Text className="book-genre book-info">
            {book.genreId ? null : 'Нет жанра'}
          </Text>
          <Text className="book-isbn book-info">
            {book.isbn}
          </Text>
        </SimpleCell>
      </Div >
      <ToShelf id={book.id} />
      <ToChat />
    </SplitLayout>
  )
}