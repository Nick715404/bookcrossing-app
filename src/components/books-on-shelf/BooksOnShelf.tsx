import ShelfBooksList from "../shelf-books-list/ShelfBooksList";
import { $user } from "../../store/user";
import { Group } from "@vkontakte/vkui";
import { useUnit } from "effector-react";
import React from "react";

function BooksOnShelf() {

  const user = useUnit($user);

  return (
    <Group>
      {user && <ShelfBooksList />}
    </Group>
  )
}

export default React.memo(BooksOnShelf);