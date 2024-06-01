import { CategoriesCards, CustomHeader, Relevants, SearchBar } from '../components';
import { Panel, Group, } from '@vkontakte/vkui';

type Props = {
	id: string
}

export function Catalog({ id }: Props) {
	return (
		<Panel id={id}>
			<CustomHeader />
			<Group separator='hide'>
				<SearchBar onPanel />
				<CategoriesCards />
			</Group>
			<Group>
				<Relevants />
			</Group>
		</Panel>
	)
}
