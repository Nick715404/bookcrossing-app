import Search from '../components/Search/Search';
import Categories from '../components/categories/Categories';
import Relevants from '../components/relevant/Relevants';
import CustomHeader from '../components/header/CustomHeader';

import { Panel, Group } from '@vkontakte/vkui';

type CatalogProps = {
	id: string;
};

export const Catalog = ({ id }: CatalogProps) => {
	return (
		<Panel id={id}>
			<CustomHeader />
			<Group separator='auto'>
				<Search onPanel />
				<Categories />
			</Group>
			<Group>
				<Relevants />
			</Group>
		</Panel>
	);
};
