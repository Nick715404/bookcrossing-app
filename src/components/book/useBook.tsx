import {
	useActiveVkuiLocation,
	useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router';
import { TBook } from '../../types';
import { selectBookFX } from '../../store/modalBook';

type useBookProps = {
	book: TBook;
};

export const useBook = ({ book }: useBookProps) => {
	const navigator = useRouteNavigator();
	const { panel: activePanel } = useActiveVkuiLocation();
	const { categoryId, title, authors } = book;

	const handleChooseBook = () => {
		selectBookFX(book);
		navigator.push(`/book/${book.id}`);
	};

	return {
		activePanel,
		categoryId,
		title,
		authors,
		handleChooseBook,
	};
};
