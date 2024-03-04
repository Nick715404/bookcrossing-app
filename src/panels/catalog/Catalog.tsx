import {
	Panel,
	PanelHeader,
	Group,
} from '@vkontakte/vkui';

import Search from '../../components/search/Search';
import Genres from '../../components/genres/Genres';
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
				<Genres />
			</Group>

			<Group separator='hide'>
				<Relevants />
			</Group>

		</Panel>
	)
}
