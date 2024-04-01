import { useEffect } from "react";
import { FindBooksOnShelfFX } from "../api/server/shelf/shelf";
import { useUnit } from "effector-react";
import { $user } from "../store/user";
import { $booksOnShelf } from "../store/shelf";

type Props = {
  children: React.ReactNode
}

export default function ShelfProvider({ children }: Props) {

  const [user, books] = useUnit([$user, $booksOnShelf]);

  useEffect(() => {
    if (user.userId == '') return
    FindBooksOnShelfFX(user.userId);

    if (books.length !== 0) {
      FindBooksOnShelfFX(user.userId);
    }

  }, [user]);

  return (
    <>
      {children}
    </>
  )
}