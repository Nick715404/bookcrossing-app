import { Fragment } from 'react/jsx-runtime';
import { useInfinteScroll } from './useInfinteScroll';
import Book from '../Book/Book';
import ToFav from '../toFav/toFav';
import ToChat from '../toChat/toChat';
import { Button } from '@vkontakte/vkui';
import { useEffect, useRef } from 'react';
import { BookSkeleton } from '../Skeletons/BookSkeleton';
import EmptyPlate from '../empty-plate/EmptyPlate';
import { Icon28BookOutline } from '@vkontakte/icons';
import { vkGreyColor } from '../../constants/utils';

export const CatalogBookList = () => {
	const loadMoreRef = useRef<HTMLDivElement | null>(null);
	const { status, data, isFetchingNextPage } = useInfinteScroll({
		loadMoreRef: loadMoreRef,
	});

	return (
		<>
			{status === 'loading' && <BookSkeleton />}
			{status === 'error' && (
				<EmptyPlate
					icon={<Icon28BookOutline fill={vkGreyColor} width={56} height={56} />}
					label='Добавить книгу'
					title='Добавляйте книги | и обменивайтесь ими'
					text='Здесь будут отображаться книги из каталога'
					location='create'
				/>
			)}

			{data?.pages.map((page, pageIndex) => (
				<Fragment key={pageIndex}>
					{page.books.map(book => (
						<Fragment key={book.id}>
							<Book
								book={book}
								afterIcon={
									<ToFav bookId={book.id} ownerId={book.owner} isFav={false} />
								}
								beforeIcon={<ToChat vkid={book.owner} />}
							/>
						</Fragment>
					))}
				</Fragment>
			))}

			{/* Элемент, который будет триггером для IntersectionObserver */}
			<div ref={loadMoreRef} style={{ height: 1 }} />

			{isFetchingNextPage && <BookSkeleton />}
		</>
	);
};
