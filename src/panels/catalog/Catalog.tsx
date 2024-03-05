import {
	Panel,
	PanelHeader,
	Group,
} from '@vkontakte/vkui';

import Search from '../../components/search/Search';
import Categories from '../../components/genres/Categories';
import Relevants from '../../components/relevant/Relevants';

type Props = {
	id: string
}

export default function Catalog({ id }: Props) {

	return (
		<Panel id={id}>

			<PanelHeader>
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
