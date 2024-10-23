import SortedBookList from '../components/sortedBookList/SortedBookList';
import CustomHeader from '../components/header/CustomHeader';
import { Group, Panel } from '@vkontakte/vkui';

type SingleCategoryProps = {
	id: string;
};

export const SingleCategory = ({ id }: SingleCategoryProps) => {
	return (
		<Panel id={id}>
			<CustomHeader withBack />
			<Group>
				<SortedBookList />
			</Group>
		</Panel>
	);
};
