import {
	Panel,
	PanelHeader,
	Group,
} from '@vkontakte/vkui';

import Search from '../../components/search/Search';
import Categories from '../../components/categories/Categories';
import Relevants from '../../components/relevant/Relevants';
import { categoriesBooksFX } from '../../utilities/category/category.utils';

type Props = {
	id: string
}

export default function Catalog({ id }: Props) {
	return (
		<Panel id={id}>

			<PanelHeader separator={false}>
				Буккроссинг
			</PanelHeader>

			<Search />

			<Group separator='hide'>
				<Categories />
			</Group>

			<Group separator='hide'>
				<Relevants />
			</Group>

		</Panel>
	)
}
