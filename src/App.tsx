import './styles/styles.scss'

import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { View, Epic } from '@vkontakte/vkui';
import { useEffect } from 'react';
import { GetCurrentUserFX } from './api/server/user/user';
import { vkUser } from './constants/vk-users';

import Nav from './components/tabbar/Nav';
import Catalog from './panels/catalog/Catalog';
import Profile from './panels/profile/Profile';
import Create from './panels/create/Create';

const App = () => {

	useEffect(() => {
		GetCurrentUserFX(vkUser);
	}, []);

	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('panel');

	return (
		<Epic
			activeStory={activeView || ''}
			tabbar={<Nav />}
		>
			<View id={activeView || ''} activePanel={activePanel || ''}>
				<Catalog id='catalog-panel' />
				<Profile id='profile-panel' />
				<Create id='create-panel' />
			</View>
		</Epic>
	);
}

export default App;
