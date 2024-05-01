import React from 'react'
import { useQuery } from 'react-query';
import { getCurrentBook } from '../api/server/books/books';

type Props = {
  bookId: string;
  paramsId: string | undefined;
}

const useCurrentBook = ({ bookId, paramsId }: Props) => {
  return useQuery({
    queryKey: ['serverBook'],
    queryFn: async () => {
      if (bookId === '') {
        return await getCurrentBook(paramsId)
      }
    }
  })
}

export { useCurrentBook };