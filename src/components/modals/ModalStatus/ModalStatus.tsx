import { Div, Group, Headline, ModalPage, ModalPageHeader, SplitCol, Text } from "@vkontakte/vkui";
import { IPassIdToModalPage } from "../../../interfaces/interface";
import { setStatusActiveModal } from "../../../store/activeModal";


const ModalStatus = ({ id }: IPassIdToModalPage) => {
    return (
        <ModalPage id={id} onClose={() => setStatusActiveModal(null)} size="s"
            header={
                <ModalPageHeader style={{ display: "flex", justifyContent: "center" }}>
                    Оценка состояния книги
                </ModalPageHeader>
            }>
            <Div className="statusBookPage">
                <Group separator="hide">
                    <Headline level="1" weight="1" style={{ marginBottom: -10 }}>
                        Отличное:
                    </Headline>
                    <Div>
                        <Text className="text">Обложка не повреждена;</Text>
                        <Text className="text">Нет помарок на страницах;</Text>
                        <Text className="text">Страницы не помяты и не порваны;</Text>
                        <Text className="text" style={{ marginBottom: 16 }}>Допускаются царапины;</Text>
                    </Div>
                </Group>

                <Group separator="hide">
                    <Headline level="1" weight="1" style={{ marginBottom: -10, marginTop: -10 }}>
                        Хорошее:
                    </Headline>
                    <Div>
                        <Text className="text">Обложка незначительно повреждена, или потерта;</Text>
                        <Text className="text">На станицах незначительные пометки или помарки;</Text>
                        <Text className="text">Страницы не порваны;</Text>
                        <Text className="text">Книга может быть покороблена от воздействия влаги;</Text>
                        <Text className="text" style={{ marginBottom: 16 }}>Суперобложка (если была) порвана или утеряна;</Text>
                    </Div>
                </Group>

                <Group separator="hide">
                    <Headline level="1" weight="1" style={{ marginBottom: -10, marginTop: -10 }}>
                        Приемлемое:
                    </Headline>
                    <Div>
                        <Text className="text">Страницы содержат значительные пометки или помарки;</Text>
                        <Text className="text">Обложка повреждена, но не потеряна целиком;</Text>
                        <Text className="text">Некоторые страницы порваны, испачканы, но текст читается полностью, ни одна страница не утеряна;</Text>
                        <Text className="text" style={{ marginBottom: 16 }}>Переплет может частично распадаться на тетради, некоторые страницы могут выпадать;</Text>
                    </Div>
                </Group>

                <Group separator="hide">
                    <Headline level="1" weight="1" style={{ marginBottom: -10, marginTop: -10 }}>
                        Плохое:
                    </Headline>
                    <Div className="bottomStatus">
                        <Text className="text">Обложка утеряна;</Text>
                        <Text className="text">Страницы повреждены либо испачканы, что существенно мешает восприятию текста;</Text>
                        <Text className="text">Отсутствуют страница(ы);</Text>
                        <Text className="text" >Переплет рассыпается;</Text>
                    </Div>
                </Group>
            </Div>
        </ModalPage>
    )
}

export default ModalStatus;