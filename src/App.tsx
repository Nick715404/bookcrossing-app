import './styles/styles.scss'

import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { View, Epic, ModalRoot, SplitLayout } from '@vkontakte/vkui';
import { useEffect, useState } from 'react';

import Nav from './components/tabbar/Nav';
import Catalog from './panels/catalog/Catalog';
import Profile from './panels/profile/Profile';
import Create from './panels/create/Create';
//import { createUserFX } from './api/server/user/user';
import { useUnit } from 'effector-react';
//import { $users } from './store/user';
import Modal from './components/modal/Modal';
import ModalImgBook from './components/modal/modalImgbook/ModalImgBook';
import { $statusActivModal, setStatusActiveModal } from './store/activeModal';
import ModalBookStatusDescription from './components/modal/modalBookStatusDescriptions/ModalBookStatusDescription';
import { GetCurrentUserFX } from './api/server/user/user';
import { vkUser } from './constants/vk-users';
// import TranscriptIsbnModal from './components/modal/transcriptISBNModal/transcriptIsbnModal';

const fakeVkUser = {
	givenBooks: 134,
	recievdBooks: 15,
	city: 'Москва',
	vkId: '9999'
}

const App = () => {

	useEffect(() => {
		GetCurrentUserFX(vkUser);
	}, []);

	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('panel');
	// const [activeModal, setActiveModal] = useState<string | null>(null);

	const changeActiveModal = (id: string | null) => {
		setStatusActiveModal(id);
	}

	const activeModal = useUnit($statusActivModal);
	
	const modal = (
		<ModalRoot activeModal={activeModal} onClose={() => changeActiveModal(null)}>
			<Modal id={"modal"}  />
			<ModalImgBook id={"modalImgBook"} changeActiveModal={changeActiveModal} />
      		<ModalBookStatusDescription id={"statusDescription"} changeActiveModal={changeActiveModal} />
			{/* <TranscriptIsbnModal id={"transcriptISBN"} changeActiveModal={changeActiveModal}/> */}
		</ModalRoot>
	)

	return (
		<SplitLayout modal={modal}>
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
