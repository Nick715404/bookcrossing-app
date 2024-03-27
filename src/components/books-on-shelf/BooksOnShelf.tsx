import { useUnit } from "effector-react";
import { useEffect, useState } from "react"
import { $booksOnShelf } from "../../store/shelf";
import { FindBooksOnShelfFX } from "../../api/server/shelf/shelf";
import { $user } from "../../store/user";
import { Group } from "@vkontakte/vkui";
import ShelfBooksList from "../shelf-books-list/ShelfBooksList";

export default function BooksOnShelf() {

  const user = useUnit($user);

  return (
    <Group>
      {user && <ShelfBooksList />}
    </Group>
  )
}