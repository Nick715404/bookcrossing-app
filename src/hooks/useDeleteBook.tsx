import { useMutation, useQueryClient } from "react-query";
import { deleteBook } from "../api/server/books/books.query";

interface IProps {
  bookId?: string;
}

const useDeleteBook = ({ bookId }: IProps) => {

  const client = useQueryClient();

  const handleDelete = async (id: string | undefined) => {
    if (id) deleteBook(id);
  }

  return useMutation({
    mutationKey: ['delete', 'book'],
    mutationFn: () => handleDelete(bookId),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [
          ['books', 'all'],
          ['books', 'shelf']
        ]
      })
    }
  })
}

export { useDeleteBook };