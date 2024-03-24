
// - Посоветоваться: нужно ли ставить зависимость от стора
// - Спросить нужно ли вынести этот функционал в InitAppEntities

import { useUnit } from "effector-react";
import { useEffect } from "react"
import { $booksOnShelf } from "../../store/shelf";
import { FindBooksOnShelf, FindCurrentShelf } from "../../api/server/shelf/shelf";
import { $user } from "../../store/user";
import { Group } from "@vkontakte/vkui";
import ShelfBooksList from "../shelf-books-list/ShelfBooksList";

type Props = {}

export default function BooksOnShelf({ }: Props) {

  const [books, user] = useUnit([$booksOnShelf, $user]);

  useEffect(() => {
    if (!user) return
    FindBooksOnShelf(user?.userId || '');
  }, []);

  return (
    <Group>
      <ShelfBooksList books={books} />
    </Group>
  )
}