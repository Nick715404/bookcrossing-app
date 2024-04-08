import "../../../styles/components/transcriptionIsbn.scss"

import { setStatusActiveModal } from "../../../store/activeModal";
import { IPassIdToModalPage } from "../../../interfaces/interface";

import { Div, ModalPage, Group, Text, ModalPageHeader, Image } from "@vkontakte/vkui";

const TranscriptIsbnModal = ({ id }: IPassIdToModalPage) => {
    const image = (
        <img className="imgIsbn" src="/img/genres/Isbn.png" />
    )
    const header = (
        <ModalPageHeader style={{ display: "flex", justifyContent: "center" }}>
            Что такое ISBN?
        </ModalPageHeader>
    )

    return (
        <ModalPage
            id={id}
            onClose={() => setStatusActiveModal(null)}
            header={header}>
            <Div className="modalPageIsbn">
                {image}
            </Div>
            <Div className="textBlock">
                <Group separator="hide">
                    <Text>
                        ISBN — код, позволяющий идентифицировать книгу. Благодаря нему, можно узнать название, автора, издательство, которым книга была напечатана, и другую информацию.
                    </Text>
                </Group>
                <Group separator="hide">
                    <Text>
                        Обычно указывается около штрихкода и на титульном листе или на заменяющем его элементе.
                    </Text>
                </Group>
                <Group separator="hide">
                    <Text>
                        В нашем мини-приложение ISBN используется для поиска в каталоге.
                    </Text>
                </Group>
            </Div>
        </ModalPage>
    )
}

export default TranscriptIsbnModal;