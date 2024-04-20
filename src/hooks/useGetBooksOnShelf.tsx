import { $user } from "../store/user";
import { findBooksOnShelf } from "../api/server/books/books.query";

import { useUnit } from "effector-react";
import { useQuery } from "react-query";

const useGetBooksOnShelf = () => {

  const user = useUnit($user);

  return useQuery({
    queryKey: ['books', 'shelf'],
    queryFn: () => findBooksOnShelf(user.userId),
  })
}

export { useGetBooksOnShelf };