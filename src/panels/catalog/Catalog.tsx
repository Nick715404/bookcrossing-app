import Search from '../../components/search/Search';
import Categories from '../../components/categories/Categories';
import Relevants from '../../components/relevant/Relevants';

import {
	Panel,
	PanelHeader,
	Group,
	IconButton,
} from '@vkontakte/vkui';


type Props = {
	id: string
}

export default function Catalog({ id }: Props) {
	return (
		<Panel id={id}>
			<PanelHeader separator={false}>Буккроссинг</PanelHeader>
			<Group>
				<Search onPanel />
				<Categories />
				<Relevants />
			</Group>
		</Panel>
	)
}
