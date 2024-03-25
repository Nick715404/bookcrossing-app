
// - Посоветоваться: нужно ли ставить зависимость от стора
// - Спросить нужно ли вынести этот функционал в InitAppEntities

import { useUnit } from "effector-react";
import { useEffect, useState } from "react"
import { $booksOnShelf } from "../../store/shelf";
import { FindBooksOnShelf } from "../../api/server/shelf/shelf";
import { $user } from "../../store/user";
import { Group } from "@vkontakte/vkui";
import ShelfBooksList from "../shelf-books-list/ShelfBooksList";

type Props = {}

export default function BooksOnShelf({ }: Props) {

  const [books, user] = useUnit([$booksOnShelf, $user]);

  const [twst1, sets] = useState<any>([]);
  
  useEffect(() => {
    if (!user) {
      console.log('user not found')
      return;
    }

    // - Поправить типы в user

    async function TestFunc() {
      // const test = await FindBooksOnShelf(user?.userId);
      // sets(test);
    }
    if (typeof user !== undefined)
      TestFunc();

  }, [user]);

  useEffect(()=>{
    console.log(books);
    
  }, [books])

  return (
    <Group>
      {books && <ShelfBooksList books={twst1} />}
    </Group>
  )
}