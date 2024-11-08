import CategoriesList from '../components/CategoriesList/CategoriesList';
import CustomHeader from '../components/header/CustomHeader';
import { Group, Panel } from '@vkontakte/vkui';

type CategoriesProps = {
	id: string;
};

export const Categories = ({ id }: CategoriesProps) => {
	return (
		<Panel id={id}>
			<CustomHeader withBack />
			<Group>
				<CategoriesList />
			</Group>
		</Panel>
	);
};
