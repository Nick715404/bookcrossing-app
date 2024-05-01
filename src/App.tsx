import './styles/styles.scss'
import Router from './router/Router';
import GlobalSnackbar from './components/GlobalSnackbar/GlobalSnackbar';

const App = () => {
	return (
		<>
			<Router />
			<GlobalSnackbar />
		</>
	);
}

export default App;