import {
	useActiveVkuiLocation,
	useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router';
import { selectBookFX } from '../../store/modalBook';
import { Div, SimpleCell, Text, SplitLayout } from '@vkontakte/vkui';
import { CustomImage } from '../CustomImage/CustomImage';
import { TBook } from '../../types';

type Props = {
	book: TBook;
	afterIcon: React.ReactNode | null;
	beforeIcon: React.ReactNode | null;
};

export default function Book({ book, afterIcon, beforeIcon }: Props) {
	const navigator = useRouteNavigator();
	const { panel: activePanel } = useActiveVkuiLocation();
	const {
		categoryId,
		description,
		id,
		isbn,
		owner,
		releaseDate,
		state,
		title,
		authors,
	} = book;

	const handleChooseBook = () => {
		selectBookFX(book);
		navigator.push(`/book/${book.id}`);
	};

	return (
		<SplitLayout>
			<Div className='book' id={book.id}>
				<SimpleCell
					className='book-wrapper'
					// before={<CustomImage bookId={book.id} />}
					selected={activePanel === 'book-panel'}
					onClick={handleChooseBook}
				>
					<Text className='book-title' weight='1'>
						{title}
					</Text>
					<Text className='book-author book-info'>
						{/* {book.author ? book.author : 'Автор не найден'} */}
						{authors ? authors?.map((author, index) => author.author.name) : ''}
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
}
