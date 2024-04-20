import { useQuery } from "react-query";
import { fetchBooks } from "../api/server/books/books.query";

const useFetchBooks = () => {
  return useQuery({
    queryKey: ['books', 'all'],
    queryFn: fetchBooks
  })
}

export { useFetchBooks };