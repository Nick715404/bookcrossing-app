import { Icon24CancelOutline } from "@vkontakte/icons"
import { Div, Group, IconButton } from "@vkontakte/vkui"
import { vkBlueColor } from "../../../constants/utils";


const HeaderClose = () => {
    const handleBack = () => {
        // navigator.push('/')
        window.history.back();
    }

    return (
        <Div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 0 }}>
            <Group separator='hide'>
                <IconButton onClick={handleBack} style={{ left: '-14px' }}>
                    <Icon24CancelOutline fill={vkBlueColor} />
                </IconButton>
            </Group>
            <Group style={{ justifyContent: 'center' }}>
                Буккроссинг
            </Group>
        </Div>
    )
}

export default HeaderClose;