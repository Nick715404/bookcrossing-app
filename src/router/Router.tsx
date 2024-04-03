import Nav from "../components/tabbar/Nav";
import Catalog from "../panels/catalog/Catalog";
import Profile from "../panels/profile/Profile";
import Create from "../panels/create/Create";
import Category from "../panels/categories/Category";
import SearchPanel from "../panels/search/Search";
import { useActiveVkuiLocation, useGetPanelForView } from "@vkontakte/vk-mini-apps-router";
import { Epic, View } from "@vkontakte/vkui";

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
				<SearchPanel id="search-panel" />
			</View>
		</Epic>
	)
}

export default Router;