import { Div, SimpleCell, Image, Text } from "@vkontakte/vkui"
import ToShelf from "./toShelf/toShelf";

export default function Book() {

  const image = (
    <Image
      style={{ marginBottom: '0', marginTop: '0' }}
      className="book-img"
      size={96}
      borderRadius="m"
      src="https://fashionelite.com/wp-content/uploads/2016/09/1331144712_IMG_paris1.jpg" />
  )

  return (
    <Div className="book">
      <SimpleCell className="book-wrapper" before={image}>
        <Text
          weight="1"
          className="book-title">
          Атлант расправил плечи
        </Text>
        <Text className="book-author book-info">
          Энтони Бёрджесс
        </Text>
        <Text className="book-quality book-info">
          Отличное
        </Text>
        <Text className="book-genre book-info">
          Детектив
        </Text>
        <Text className="book-asbn book-info">
          199148-12881
        </Text>
        <ToShelf />
      </SimpleCell>
    </Div >
  )
}