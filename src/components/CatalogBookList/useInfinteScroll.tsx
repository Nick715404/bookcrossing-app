import { useInfiniteQuery } from 'react-query';
import { fetchBooks } from '../../api/server/books/books.query';
import { useEffect } from 'react';

type useInfinteScrollProps = {
	loadMoreRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const useInfinteScroll = ({ loadMoreRef }: useInfinteScrollProps) => {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useInfiniteQuery(['books'], fetchBooks, {
			getNextPageParam: lastPage => lastPage.nextPage ?? false,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			onSuccess: data => {
				console.log('Books fetched');
			},
		});

	const handleLoadMore = () => {
		if (hasNextPage) fetchNextPage();
	};

	useEffect(() => {
		if (!hasNextPage || isFetchingNextPage) return;

		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				fetchNextPage();
			}
		});

		if (loadMoreRef.current) {
			observer.observe(loadMoreRef.current);
		}

		return () => {
			if (loadMoreRef.current) {
				observer.unobserve(loadMoreRef.current);
			}
		};
	}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

	return {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		status,
		handleLoadMore,
	};
};
