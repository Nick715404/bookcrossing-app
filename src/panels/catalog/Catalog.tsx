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
import { Icon24MenuOutline } from '@vkontakte/icons';
import { vkBlueColor } from '../../constants/utils';
import CustomHeader from '../../components/header/CustomHeader';

type Props = {
	id: string
}

export default function Catalog({ id }: Props) {
	return (
		<Panel id={id}>
			<PanelHeader>
				<CustomHeader />
			</PanelHeader>
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
