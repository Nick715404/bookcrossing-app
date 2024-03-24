import './styles/styles.scss'

import { RouterLink, useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';

import Nav from './components/tabbar/Nav';
import Catalog from './panels/catalog/Catalog';
import Profile from './panels/profile/Profile';
import Create from './panels/create/Create';
import { GetCurrentUserFX, /*createUserFX */} from './api/server/user/user';
import { useUnit } from 'effector-react';
import Modal from './components/modal/Modal';
import ModalImgBook from './components/modal/modalImgbook/ModalImgBook';
import { $statusActivModal, setStatusActiveModal } from './store/activeModal';
import ModalBookStatusDescription from './components/modal/modalBookStatusDescriptions/ModalBookStatusDescription';
import { vkUser } from './constants/vk-users';
// import TranscriptIsbnModal from './components/modal/transcriptISBNModal/transcriptIsbnModal';
import InitAppEntities from './init-app-entities/InitAppEntities';
import InitAppModals from './init-app-entities/InitAppModals';
import Router from './router/Router';
import { AdaptivityProvider, AppRoot, ConfigProvider, Epic, SplitLayout, View } from '@vkontakte/vkui';

const App = () => {

	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('panel');
	/* const [activeModal, setActiveModal] = useState<string | null>(null);

	const changeActiveModal = (id: string | null) => {
		setStatusActiveModal(id);
	}

	const activeModal = useUnit($statusActivModal);

	const modal = (
		<ModalRoot activeModal={activeModal} onClose={() => changeActiveModal(null)}>
			<Modal id={"modal"} />
			<ModalImgBook id={"modalImgBook"} changeActiveModal={changeActiveModal} />
			<ModalBookStatusDescription id={"statusDescription"} changeActiveModal={changeActiveModal} />
			{/* <TranscriptIsbnModal id={"transcriptISBN"} changeActiveModal={changeActiveModal}/>}
		</ModalRoot>
	)*/

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
				</View>
			</Epic>	
		</SplitLayout>
	);
}

export default App;
