import { Div, Gallery, Group, ModalCard, ModalPage } from "@vkontakte/vkui";
import { IPassIdToModalPage } from "../../../interfaces/interface";
import { setStatusActiveModal } from "../../../store/activeModal";


const ModalImgBook = ({id}: IPassIdToModalPage) => {
    return (
        <ModalCard id={id} onClose={() => setStatusActiveModal(null)} /*dynamicContentHeight={true}*/>
            <Div>
                <Group className="gallery">
                    <Gallery slideWidth="90%" bullets="dark">
                        <img src="https://fashionelite.com/wp-content/uploads/2016/09/1331144712_IMG_paris1.jpg" />
                        <img src="https://play-lh.googleusercontent.com/SRNiR83c9dNlqVVP9zZDoSyPWpBUspkfafsGndd6j7rHX1L5maWt9QbGsFNXLurxFdk" />
                        <img src="https://fashionelite.com/wp-content/uploads/2016/09/1331144712_IMG_paris1.jpg" />
                    </Gallery>
                </Group>
            </Div>
        </ModalCard>
    )
}

export default ModalImgBook;