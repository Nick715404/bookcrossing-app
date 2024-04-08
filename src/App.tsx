import './styles/styles.scss'

import Nav from './components/tabbar/Nav';
import Catalog from './panels/catalog/Catalog';
import Profile from './panels/profile/Profile';
import Create from './panels/create/Create';

import { Epic, SplitLayout, View } from '@vkontakte/vkui';
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import HomePageBook from './components/modals/pages/HomePageBook';

const App = () => {

	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('panel');

	return (
		<SplitLayout>
			<Epic
				activeStory={activeView || ''}
				tabbar={<Nav />}
			>
				<View id={activeView || ''} activePanel={activePanel || ''}>
					<Catalog id='catalog-panel' />
					<Profile id='profile-panel' />
					<Create id='create-panel' />
					<HomePageBook id='book-panel' />
				</View>
			</Epic>
		</SplitLayout>
	);
}

export default App;
