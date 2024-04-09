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
import { Icon24MenuOutline } from '@vkontakte/icons';
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

			<PanelHeader separator={false} >
				<Div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 0}}>
					<Group separator='hide'>
						<IconButton onClick={handelMenu}>
							<Icon24MenuOutline style={{paddingLeft: 0}} />
						</IconButton>
					</Group>
					<Group style={{justifyContent: 'center'}}>
						Буккроссинг
					</Group>
				</Div>
			</PanelHeader>

			<Search onPanel />

			<Group
				style={{ paddingBottom: '16px' }}
				separator='hide'
			>
				<Categories />
				<Relevants />
			</Group>
		</Panel>
	)
}
