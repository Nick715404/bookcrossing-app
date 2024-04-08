import {
	Panel,
	PanelHeader,
	Group,
	IconButton,
} from '@vkontakte/vkui';

import Search from '../../components/search/Search';
import Categories from '../../components/categories/Categories';
import Relevants from '../../components/relevant/Relevants';
import { Icon20LineBottom } from '@vkontakte/icons';


type Props = {
	id: string
}

export default function Catalog({ id }: Props) {
	return (
		<Panel id={id}>

			<PanelHeader separator={false}>
				Буккроссинг
			</PanelHeader>

			<Search onPanel />

			<Group
				style={{ paddingBottom: '16px' }}
				separator='hide'
			>
				<Categories />
			</Group>

			<Group separator='hide'>
				<Relevants />
			</Group>

		</Panel>
	)
}
