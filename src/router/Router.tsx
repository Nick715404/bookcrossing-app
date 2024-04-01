import { useActiveVkuiLocation, useGetPanelForView } from "@vkontakte/vk-mini-apps-router";
import Nav from "../components/tabbar/Nav";
import Catalog from "../panels/catalog/Catalog";
import Profile from "../panels/profile/Profile";
import Create from "../panels/create/Create";
import { useUnit } from "effector-react"
import { Epic, View } from "@vkontakte/vkui";
import Category from "../panels/[categoty]/Category";


const Router = () => {

	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('panel');

	return (
		<Epic
			activeStory={activeView || ''}
			tabbar={<Nav />}
		>
			<View id={activeView || ''} activePanel={activePanel || ''}>
				<Catalog id='catalog-panel' />
				<Profile id='profile-panel' />
				<Create id='create-panel' />
				<Category id='single-genre-panel' />
			</View>
		</Epic>
	)
}

export default Router;