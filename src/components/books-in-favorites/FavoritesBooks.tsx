import { $user } from "../../store/user"
import { useUnit } from "effector-react"
import { Group, MiniInfoCell } from "@vkontakte/vkui"
import FavoriteBooksList from "../favorite-books-list/FavoriteBooksList";
import { Icon20Info } from '@vkontakte/icons'

export default function FavoritesBooks() {

  const user = useUnit($user);

  return (
    <Group>
      <MiniInfoCell before={<Icon20Info />} textWrap="full">
        Некоторые книги могли пропасть, так как были удалены из каталога владельцами
      </MiniInfoCell>
      {user && <FavoriteBooksList />}
    </Group >
  )
}