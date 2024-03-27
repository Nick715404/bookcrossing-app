import { useEffect } from "react";
import { FindBooksOnShelfFX } from "../api/server/shelf/shelf";
import { useUnit } from "effector-react";
import { $user } from "../store/user";
import { $books } from "../store/books";
import { $booksOnShelf } from "../store/shelf";

type Props = {
  children: React.ReactNode
}

export default function ShelfProvider({ children }: Props) {

  const user = useUnit($user);

  useEffect(() => {
    if (user.userId == '') return
    FindBooksOnShelfFX(user.userId);
  }, [user]);

  return (
    <>
      {children}
    </>
  )
}