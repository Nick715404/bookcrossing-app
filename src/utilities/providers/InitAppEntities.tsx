import { IInitAppEntities } from '../../types/interface';
import UserProvider from './UserProvider';
import FavouritesProvider from './FavouritesProvider';
import InitCategories from './InitCategories';
import { QueryProvider } from './QueryProvider';
import InitAppModals from './InitAppModals';
import { AppRoot } from '@vkontakte/vkui';
import SnackBarProvider from './SnackBarProvider';

const InitAppEntities = ({ children }: IInitAppEntities) => {
	return (
		<>
			<QueryProvider>
				<AppRoot>
					<InitAppModals>
						<UserProvider>
							<SnackBarProvider>{children}</SnackBarProvider>
						</UserProvider>
					</InitAppModals>
				</AppRoot>
			</QueryProvider>
		</>
	);
};

export default InitAppEntities;
