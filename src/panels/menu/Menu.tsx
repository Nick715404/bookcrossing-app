import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { $user } from "../../store/user";
import { setStatusActiveModal } from "../../store/activeModal";

import { useUnit } from "effector-react";
import { CellButton, Div, Group, Panel, PanelHeader, Text } from "@vkontakte/vkui";
import CustomHeader from "../../components/header/CustomHeader";

type Props = {
    id: string,
}

const Menu = ({ id }: Props) => {
    const navigator = useRouteNavigator();
    const user = useUnit($user);

    const handelUserAgreement = () => {
        navigator.push('/userAgreement')
    }

    return (
        <Panel id={id}>
            <CustomHeader withBack />
            <Group>
                <CellButton>
                    <Text onClick={() => setStatusActiveModal('menuOnboarding')} className="menu-item">
                        О приложении
                    </Text>
                </CellButton>

                <CellButton onClick={() => setStatusActiveModal('transcriptISBN')}>
                    <Text className="menu-item">
                        Что такое ISBN
                    </Text>
                </CellButton>

                <CellButton onClick={() => setStatusActiveModal('statusDescription')}>
                    <Text className="menu-item">
                        Оценка состояния книги
                    </Text>
                </CellButton>

                {/* <CellButton>
                    <Text className="menu-item">
                        Поддержать проект
                    </Text>
                </CellButton> */}

                <CellButton onClick={handelUserAgreement}>
                    <Text className="menu-item">
                        Пользовательское соглашение
                    </Text>
                </CellButton>

                <Div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 0 }}>
                    <Text className="menu-item">
                        Город:
                    </Text>
                    <CellButton style={{ margin: 0 }}>
                        {user.city ? user.city : 'Загругка...'}
                    </CellButton>
                </Div>
            </Group>
        </Panel>
    )
}

export default Menu;