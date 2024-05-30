import { $user } from "../store/user";
import { findBooksOnShelf } from "../api/server/books.query";

import { useUnit } from "effector-react";
import { useQuery } from "react-query";

const useGetBooksOnShelf = () => {
  const user = useUnit($user);

  const handleFetch = async () => {
    if (user.userId === '') {
      return;
    }
    return findBooksOnShelf(user.userId)
  }

  return useQuery({
    queryKey: ['books shelf'],
    queryFn: handleFetch,
  })
}

export { useGetBooksOnShelf };