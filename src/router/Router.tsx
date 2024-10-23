import {
	useActiveVkuiLocation,
	useGetPanelForView,
} from '@vkontakte/vk-mini-apps-router';
import Nav from '../components/tabbar/Nav';
import HomePageBook from '../components/modals/pages/HomePageBookServer';
import {
	Catalog,
	Categories,
	ChooseCitiesPage,
	Create,
	EditPanel,
	Menu,
	OnboardingRouterPage,
	ProfilePanel,
	SearchPanel,
	SingleCategory,
	UserAgreement,
} from '../panels';
import { Epic, View } from '@vkontakte/vkui';

const Router = () => {
	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('panel');

	return (
		<>
			<Epic activeStory={activeView || ''} tabbar={<Nav />}>
				<View id={activeView || ''} activePanel={activePanel || ''}>
					<Catalog id='catalog-panel' />
					<ProfilePanel id='profile-panel' />
					<Create id='create-panel' />
					<Categories id='category-panel-all' />
					<SingleCategory id='category-panel-single' />
					<SearchPanel id='search-panel' />
					<HomePageBook id='book-panel' />
					<Menu id='main-panel' />
					<UserAgreement id='user-agreement' />
					<EditPanel id='edit-book' />
					<ChooseCitiesPage id='choose-city-panel' />
					<OnboardingRouterPage id='onboarding-panel' />
				</View>
			</Epic>
		</>
	);
};

export default Router;
