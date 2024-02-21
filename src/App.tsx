import './styles/styles.scss'

import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { Root, View, Epic } from '@vkontakte/vkui';

import Home from './panels/home/Home';

const App = () => {
	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('panel');

	return (
		<Epic activeStory={activeView || ''}>
			<View id={activeView || ''} activePanel={activePanel || ''}>
				<Home id='home-panel' />
			</View>
		</Epic>


	);
}

export default App;
