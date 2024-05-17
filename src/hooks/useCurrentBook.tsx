import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { getCurrentBook } from '../api/server/books/books';

type Props = {
  bookId: string;
  paramsId: string | undefined;
}

const useCurrentBook = ({ bookId, paramsId }: Props) => {

  const client = useQueryClient();

  return useQuery({
    queryKey: ['serverBook'],
    queryFn: async () => {
      if (bookId === '') {
        return await getCurrentBook(paramsId)
      }
    },
    refetchOnWindowFocus: false,
    onSuccess() {
      client.invalidateQueries({
        queryKey: [['owner', 'city']]
      })
    }
  })
}

export { useCurrentBook };