import { Icon24MenuOutline } from "@vkontakte/icons"
import { useActiveVkuiLocation, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Div, Group, IconButton } from "@vkontakte/vkui"
import { vkBlueColor } from "../../constants/utils";

const CustomHeader = () => {
    const navigator = useRouteNavigator();
	const { panel: activePanel } = useActiveVkuiLocation();
    
	const handelMenu = () => {
		navigator.push('/main')
	}

    return (
        <Div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 0}}>
			<Group separator='hide'>
				<IconButton onClick={handelMenu}>
						<Icon24MenuOutline fill={vkBlueColor} style={{paddingLeft: 0}}/>
				</IconButton>
			</Group>

			<Group>
				Буккроссинг
			</Group>
		</Div>
    )
}

export default CustomHeader;