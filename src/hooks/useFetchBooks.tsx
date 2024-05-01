import { fetchBooks } from "../api/server/books/books.query";
import { useQuery } from "react-query";

const useFetchBooks = () => {
  return useQuery({
    queryKey: ['books all'],
    queryFn: fetchBooks,
  })
}

export { useFetchBooks };