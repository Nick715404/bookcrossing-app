import './styles/styles.scss'
import Router from './router/Router';
import { fetchVkUser } from './api/vk-bridge/user';

const App = () => {
	return (
		<>
			<Router />
		</>
	);
}

export default App;