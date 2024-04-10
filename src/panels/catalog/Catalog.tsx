import Search from '../../components/search/Search';
import Categories from '../../components/categories/Categories';
import Relevants from '../../components/relevant/Relevants';

import {
	Panel,
	PanelHeader,
	Group,
	IconButton,
	Div,
} from '@vkontakte/vkui';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

type Props = {
	id: string
}

export default function Catalog({ id }: Props) {
	const navigator = useRouteNavigator();
	const { panel: activePanel } = useActiveVkuiLocation();

	const handelMenu = () => {
		navigator.push('/main')
	}
	return (
		<Panel id={id}>
			<PanelHeader>Буккроссинг</PanelHeader>
			<Group>
				<Search onPanel />
				<Categories />
			</Group>
			<Group>
				<Relevants />
			</Group>
		</Panel>
	)
}
