import { useActiveVkuiLocation, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { vkBlueColor } from "../../constants/utils";
import { Icon24MenuOutline } from "@vkontakte/icons"
import { Div, Group, IconButton } from "@vkontakte/vkui"

const CustomHeader = () => {
	const navigator = useRouteNavigator();
	const { panel: activePanel } = useActiveVkuiLocation();

	const handelMenu = () => {
		navigator.push('/main')
	}

	return (
		<Div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 0 }}>
			<Group separator='hide'>
				<IconButton onClick={handelMenu} style={{ left: '-14px' }}>
					<Icon24MenuOutline fill={vkBlueColor} />
				</IconButton>
			</Group>

			<Group>
				Буккроссинг
			</Group>
		</Div>
	)
}

export default CustomHeader;