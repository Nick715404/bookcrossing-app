import { createBook } from "../api/server/books/books.query";
import { useMutation, useQueryClient } from "react-query";

const useCreateBook = () => {

  const client = useQueryClient();

  return useMutation({
    mutationKey: ['create', 'book'],
    mutationFn: createBook,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [['books', 'all'], ['books', 'shelf']] })
    }
  })
}

export { useCreateBook };