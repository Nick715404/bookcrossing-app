import { Icon24CancelOutline } from "@vkontakte/icons"
import { Div, Group, IconButton } from "@vkontakte/vkui"
import { vkBlueColor } from "../../../constants/utils";


const HeaderClose = () => {
    const handleBack = () => {
        // navigator.push('/')
        window.history.back();
    }
    
    return (
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
    )
}

export default HeaderClose;