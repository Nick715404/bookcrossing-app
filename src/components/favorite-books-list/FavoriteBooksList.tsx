import { IBook } from "../../interfaces/interface";
import { vkGreyColor } from "../../constants/utils";

import Book from "../book/Book";
import ToChat from "../toChat/toChat";
import EmptyPlate from "../empty-plate/EmptyPlate";

import { ToFavReverse } from "../toFav/toFavReverse";
import { $user } from "../../store/user";
import { fetchBooksFromFavorites } from "../../api/server/favorites/favorites.query";
import { BookSkeleton } from "../Skeletons/BookSkeleton";

import { useUnit } from "effector-react"
import { Icon28BookmarkCheckOutline } from '@vkontakte/icons';
import { useQuery } from "react-query";

export default function FavoriteBooksList() {
  const user = useUnit($user);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['books', 'favorites'],
    queryFn: () => fetchBooksFromFavorites(user.userId),
  })

  if (isSuccess && data.length === 0) {
    return (
      <EmptyPlate
        icon={<Icon28BookmarkCheckOutline fill={vkGreyColor} width={56} height={56} />}
        title="Сохраняйте книги | в понравившиеся"
        text="Здесь будут отображаться книги, которые вы отметили как понравившиеся"
        label="Перейти в каталог"
        location=""
      />
    )
  }

  return (
    <>
      {
        isLoading && <BookSkeleton />
      }
      {
        isSuccess && data.map((book: IBook) => (
          <Book
            key={book.id}
            book={book}
            beforeIcon={<ToFavReverse bookId={book.id} />}
            afterIcon={<ToChat vkid={book.owner} />}
          />
        )).reverse()
      }
    </>
  )
}

