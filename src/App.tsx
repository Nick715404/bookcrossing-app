import './styles/styles.scss'

import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { View, Epic } from '@vkontakte/vkui';
import { useEffect } from 'react';

import Nav from './components/tabbar/Nav';
import Catalog from './panels/catalog/Catalog';
import Profile from './panels/profile/Profile';
import Create from './panels/create/Create';
import { createUserFX } from './api/server/user/user';
import { useUnit } from 'effector-react';
import { $users } from './store/user';

const fakeVkUser = {
	givenBooks: 134,
	recievdBooks: 15,
	city: 'Москва',
	vkId: '9999'
}

const App = () => {

	const users = useUnit($users)

	// useEffect(() => {
	// 	createUserFX(fakeVkUser);
	// }, []);

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
