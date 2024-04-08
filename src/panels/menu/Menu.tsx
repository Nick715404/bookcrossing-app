import { Icon24CancelOutline} from "@vkontakte/icons";
import { useActiveVkuiLocation, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { CellButton, Div, Group, IconButton, Panel, PanelHeader, Text } from "@vkontakte/vkui";

type Props = {
    id: string,
}

const Menu = ({id}: Props) => {
    const navigator = useRouteNavigator();
    const { panel: activePanel } = useActiveVkuiLocation();

    const handleBack = () => {
        navigator.push('/')
    }
    return (
        <Panel id={id}>
            <PanelHeader>
                <Div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 0}}>
                    <Group separator='hide'>
                        <IconButton onClick={handleBack}>
                            <Icon24CancelOutline style={{paddingLeft: 0}} />
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

                <CellButton style={{color: 'black'}}>
                    <Text>
                        Что такое ISBN
                    </Text>
                </CellButton>

                <CellButton style={{color: 'black'}}>
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

                    <Div>
                        <Text>
                            Город:
                        </Text>
                    </Div>
            </Group>
        </Panel>
    )
}

export default Menu;