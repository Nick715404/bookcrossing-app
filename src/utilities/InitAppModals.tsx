import { ModalRoot, SplitLayout } from "@vkontakte/vkui";
import { $statusActivModal, setStatusActiveModal } from "../store/activeModal";
import { useUnit } from "effector-react";
import Modal from "../components/modal/Modal";
import ModalImgBook from "../components/modal/modalImgbook/ModalImgBook";
import ModalBookStatusDescription from "../components/modal/ModalStatus/ModalStatus";
import { IInitAppEntities } from "../interfaces/interface";
import TranscriptIsbnModal from "../components/modal/transcriptISBNModal/TranscriptIsbnModal";
import DeleteBook from "../components/delete-book/DeleteBook";
import ModalAcceptDelete from "../components/modal/ModalAcceptDelete/ModalAcceptDelete";


const InitAppModals = ({children}: IInitAppEntities) => {

	const changeActiveModal = (id: string | null) => {
		setStatusActiveModal(id);
	}

	const activeModal = useUnit($statusActivModal);

	const modal = (
		<ModalRoot activeModal={activeModal} onClose={() => changeActiveModal(null)}>
			<ModalImgBook id={"modalImgBook"} changeActiveModal={changeActiveModal} />
			<ModalBookStatusDescription id={"statusDescription"} changeActiveModal={changeActiveModal} />
			<TranscriptIsbnModal id={"transcriptISBN"} changeActiveModal={changeActiveModal}/>
			<ModalAcceptDelete id={"deleteBook"} changeActiveModal={changeActiveModal} />
		</ModalRoot>
	)
    
    return (
        <SplitLayout modal={modal}>
            {children}
        </SplitLayout>
    )
}

export default InitAppModals;