import { Group, Header, Text } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import { $booksWithCategory } from "../../store/categories";
import { IBook } from "../../interfaces/interface";
import Book from "../book/Book";

interface Props { }

export default function SortedBookList({ }: Props) {

  const books = useUnit($booksWithCategory);

  return (
    <Group style={{ paddingTop: '30px' }}>
      <Header style={{marginBottom: '12px'}}>Жанр</Header>
      {books ? books.map((book: IBook) => (
        <Book key={book.id} afterIcon beforeIcon book={book} />
      )) : <Text>Oops</Text>}
    </Group>
  )
}