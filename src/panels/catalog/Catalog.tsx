import Search from '../../components/search/Search';
import Categories from '../../components/categories/Categories';
import Relevants from '../../components/relevant/Relevants';
import CustomHeader from '../../components/header/CustomHeader';

import {
	Panel,
	PanelHeader,
	Group,
} from '@vkontakte/vkui';

type Props = {
	id: string
}

export default function Catalog({ id }: Props) {
	return (
		<Panel id={id}>
			<PanelHeader style={{display: 'flex', marginRight: 'auto', marginLeft: '20px'}}>
				<CustomHeader />
			</PanelHeader>
			<Group separator='show'>
				<Search onPanel />
				<Categories />
			</Group>
			<Group >
				<Relevants />
			</Group>
		</Panel>
	)
}
