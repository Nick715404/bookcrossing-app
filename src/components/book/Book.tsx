import {
	useActiveVkuiLocation,
	useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router';
import { TBook } from '../../types';
import { selectBookFX } from '../../store/modalBook';
import { CustomImage } from '../CustomImage/CustomImage';
import { Div, SimpleCell, Text, SplitLayout } from '@vkontakte/vkui';
import { useBook } from './useBook';

type BookProps = {
	book: TBook;
	afterIcon: React.ReactNode | null;
	beforeIcon: React.ReactNode | null;
};

export const Book = ({ book, afterIcon, beforeIcon }: BookProps) => {
	const { activePanel, authors, categoryId, handleChooseBook, title } = useBook(
		{ book }
	);

	return (
		<SplitLayout>
			<Div className='book' id={book.id}>
				<SimpleCell
					className='book-wrapper'
					before={<CustomImage bookId={book.id} />}
					selected={activePanel === 'book-panel'}
					onClick={handleChooseBook}
				>
					<Text className='book-title' weight='1'>
						{title}
					</Text>
					<Text className='book-author book-info'>
						{authors
							? authors?.map(author => author.author.name)
							: 'Автор не указан'}
					</Text>
					<Text className='book-quality book-info'>
						{book.state ? book.state : 'Не найдено'}
					</Text>
					<Text className='book-genre book-info'>
						{categoryId ? categoryId : 'Нет жанра'}
					</Text>
				</SimpleCell>
			</Div>
			<>{afterIcon}</>
			<>{beforeIcon}</>
		</SplitLayout>
	);
};
