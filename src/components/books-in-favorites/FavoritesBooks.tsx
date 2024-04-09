import { $user } from "../../store/user"

import FavoriteBooksList from "../favorite-books-list/FavoriteBooksList";

import { Icon20Info } from '@vkontakte/icons'
import { useUnit } from "effector-react"
import { Group, MiniInfoCell } from "@vkontakte/vkui"

export default function FavoritesBooks() {

  const user = useUnit($user);

  return (
    <>
      <MiniInfoCell before={<Icon20Info />} textWrap="full">
        Некоторые книги могли пропасть, так как были удалены из каталога владельцами
      </MiniInfoCell>
      {user && <FavoriteBooksList />}
    </ >
  )
}