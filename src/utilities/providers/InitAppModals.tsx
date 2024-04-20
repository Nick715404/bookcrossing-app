import { $statusActiveModal, setStatusActiveModal } from "../../store/activeModal";
import ModalImgBook from "../../components/modals/modalImgbook/ModalImgBook";
import ModalBookStatusDescription from "../../components/modals/ModalStatus/ModalStatus";
import { IInitAppEntities } from "../../interfaces/interface";
import TranscriptIsbnModal from "../../components/modals/transcriptISBNModal/TranscriptIsbnModal";
import ModalAcceptDelete from "../../components/modals/ModalAcceptDelete/ModalAcceptDelete";

import { useUnit } from "effector-react";
import { ModalRoot, SplitLayout } from "@vkontakte/vkui";
import { ChooseCityModal } from "../../components/modals/ChooseCityModal";


const InitAppModals = ({ children }: IInitAppEntities) => {

	const changeActiveModal = (id: string | null) => {
		setStatusActiveModal(id);
	}

	const activeModal = useUnit($statusActiveModal);

	const modal = (
		<ModalRoot activeModal={activeModal} onClose={() => changeActiveModal(null)}>
			<ModalImgBook id={"modalImgBook"} changeActiveModal={changeActiveModal} />
			<ModalBookStatusDescription id={"statusDescription"} changeActiveModal={changeActiveModal} />
			<TranscriptIsbnModal id={"transcriptISBN"} changeActiveModal={changeActiveModal} />
			<ModalAcceptDelete id="deleteBook" changeActiveModal={changeActiveModal} />
			<ChooseCityModal id="chooseCity" />
		</ModalRoot>
	)

	return (
		<SplitLayout modal={modal}>
			{children}
		</SplitLayout>
	)
}

export default InitAppModals;