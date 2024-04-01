import { $user } from "../../store/user"
import { useUnit } from "effector-react"
import { Group } from "@vkontakte/vkui"
import FavoriteBooksList from "../favorite-books-list/FavoriteBooksList";

export default function FavoritesBooks() {

  const user = useUnit($user);

  return (
    <Group>
      {user && <FavoriteBooksList />}
    </Group>
  )
}