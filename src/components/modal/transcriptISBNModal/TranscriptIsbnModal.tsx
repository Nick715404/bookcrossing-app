import { ModalPage, SimpleCell, SplitLayout } from "@vkontakte/vkui";
import { setStatusActiveModal } from "../../../store/activeModal";


const TranscriptIsbnModal = () => {
    return (
        <ModalPage onClose={() => setStatusActiveModal(null)}>
            <SplitLayout>
                <SimpleCell onClick={() => setStatusActiveModal('transcriptISBN')}>

                </SimpleCell>
            </SplitLayout>
        </ModalPage>
    )
}

export default TranscriptIsbnModal;