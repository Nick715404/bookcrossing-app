import { Header } from "@vkontakte/vkui"
import Book from "../book/Book"

export default function Relevants() {
  return (
    <div>
      <Header mode="primary">
        Новые
      </Header>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}