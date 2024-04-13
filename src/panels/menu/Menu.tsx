import { Icon24CancelOutline} from "@vkontakte/icons";
import { useActiveVkuiLocation, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Cell, CellButton, Div, Group, IconButton, Panel, PanelHeader, Text } from "@vkontakte/vkui";
import { vkBlueColor } from "../../constants/utils";
import { useUnit } from "effector-react";
import { $user } from "../../store/user";
import { setStatusActiveModal } from "../../store/activeModal";

type Props = {
    id: string,
}

const Menu = ({id}: Props) => {
    const navigator = useRouteNavigator();
    // const { panel: activePanel } = useActiveVkuiLocation();

    const user = useUnit($user);

    const handleBack = () => {
        // navigator.push('/')
        window.history.back();
    }

    
    return (
        <Panel id={id}>
            <PanelHeader>
                <Div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 0}}>
                    <Group separator='hide'>
                        <IconButton onClick={handleBack}>
                            <Icon24CancelOutline fill={vkBlueColor} style={{paddingLeft: 0}} />
                        </IconButton>
                    </Group>
                    <Group style={{justifyContent: 'center'}}>
                        Буккроссинг
                    </Group>
                </Div>
            </PanelHeader>

            <Group>
            <CellButton style={{color: 'black'}}>
                    <Text>
                        О приложении
                    </Text>
                </CellButton>

                <CellButton style={{color: 'black'}} onClick={() => setStatusActiveModal('transcriptISBN')}>
                    <Text>
                        Что такое ISBN
                    </Text>
                </CellButton>

                <CellButton style={{color: 'black'}} onClick={() => setStatusActiveModal('statusDescription')}>
                    <Text>
                        Оценка состояния книги
                    </Text>
                </CellButton>

                <CellButton style={{color: 'black'}}>
                    <Text>
                        Поддержать проект
                    </Text>
                </CellButton>

                <CellButton style={{color: 'black'}}>
                    <Text>
                        Пользовательское соглашение
                    </Text>
                </CellButton>

                <Div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 0}}>
                    <Group separator="hide">
                        <Text>
                            Город: 
                        </Text>
                    </Group>
                    <Group style={{padding: 0}}>
                        <CellButton style={{margin: 0}}>
                            {user.city ? user.city : 'Загругка...'}
                        </CellButton>
                    </Group>
                </Div>
            </Group>
        </Panel>
    )
}

export default Menu;