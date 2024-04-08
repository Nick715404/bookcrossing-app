import { ModalRoot, SplitLayout } from "@vkontakte/vkui";
import { $statusActiveModal, setStatusActiveModal } from "../store/activeModal";
import { useUnit } from "effector-react";
import Modal from "../components/modals/Modal";
import ModalImgBook from "../components/modals/modalImgbook/ModalImgBook";
import ModalBookStatusDescription from "../components/modals/ModalStatus/ModalStatus";
import { IInitAppEntities } from "../interfaces/interface";
import TranscriptIsbnModal from "../components/modals/transcriptISBNModal/TranscriptIsbnModal";
import DeleteBook from "../components/delete-book/DeleteBook";
import ModalAcceptDelete from "../components/modals/ModalAcceptDelete/ModalAcceptDelete";


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
			<ModalAcceptDelete id={"deleteBook"} changeActiveModal={changeActiveModal} onClose={() => changeActiveModal(null)} />
		</ModalRoot>
	)

	return (
		<SplitLayout modal={modal}>
			{children}
		</SplitLayout>
	)
}

export default InitAppModals;