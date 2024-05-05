import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { vkBlueColor } from "../../constants/utils";
import { Icon24CancelOutline, Icon24MenuOutline } from "@vkontakte/icons"
import { IconButton, PanelHeader } from "@vkontakte/vkui"

interface IProps {
	withBack?: boolean;
}

const CustomHeader = ({ withBack }: IProps) => {
	const navigator = useRouteNavigator();
	const handelMenu = () => navigator.push('/main')
	const handleBack = () => navigator.back();

	if (withBack) {
		return (
			<PanelHeader
				before={
					<IconButton onClick={handleBack}>
						<Icon24CancelOutline fill={vkBlueColor} />
					</IconButton>
				}
			>
				Буккроссинг.рф
			</PanelHeader>
		)
	}

	return (
		<PanelHeader
			before={
				<IconButton onClick={handelMenu}>
					<Icon24MenuOutline fill={vkBlueColor} />
				</IconButton>
			}
		>
			Буккроссинг.рф
		</PanelHeader>
	)
}

export default CustomHeader;