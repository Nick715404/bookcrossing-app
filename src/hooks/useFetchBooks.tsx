import { fetchBooks } from '../api/server/books/books.query';
import { useQuery } from 'react-query';

const useFetchBooks = (page: number, limit: number) => {
	return useQuery({
		queryKey: ['books all', page, limit],
		queryFn: () => fetchBooks({ pageParam: page }),
	});
};

export { useFetchBooks };
