import {
	Panel,
	PanelHeader,
	Group,
	View,
} from '@vkontakte/vkui';

import Search from '../../components/search/Search';
import Categories from '../../components/categories/Categories';
import Relevants from '../../components/relevant/Relevants';


type Props = {
	id: string
}

export default function Catalog({ id }: Props) {
	return (
		<Panel id={id}>
			<PanelHeader separator={false}>
				Буккроссинг
			</PanelHeader>
			<Group separator='hide'>
				<Search onPanel />
				<Categories />
				<Relevants />
			</Group>
		</Panel>
	)
}
