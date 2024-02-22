import { Div, SimpleCell, Image, Header, Text, Button } from "@vkontakte/vkui"

export default function Book() {

  const image = (
    <Image
      style={{ marginBottom: '0', marginTop: '0' }}
      className="book-img"
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
      <Text className="book-author">
        Энтони Бёрджесс
      </Text>
      <Button className="book-btn">
        Написать владельцу
      </Button>
    </SimpleCell>
    </Div >
  )
}