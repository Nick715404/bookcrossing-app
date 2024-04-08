import Nav from "../components/tabbar/Nav";
import Catalog from "../panels/catalog/Catalog";
import Profile from "../panels/profile/Profile";
import Create from "../panels/create/Create";
import Genre from "../panels/categories/Genre";
import SearchPanel from "../panels/search/Search";
import { useActiveVkuiLocation, useGetPanelForView } from "@vkontakte/vk-mini-apps-router";
import HomePageBook from "../components/modals/pages/HomePageBook";
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
				<Genre id='genre-panel' />
				<SearchPanel id="search-panel" />
				<HomePageBook id='book-panel' />
			</View>
		</Epic>
	)
}

export default Router;