import { IInitAppEntities } from "../../interfaces/interface";
import UserProvider from "./UserProvider";
import FavouritesProvider from "./FavouritesProvider";
import InitCategories from "./InitCategories";
import { QueryProvider } from "./QueryProvider";
import InitAppModals from "./InitAppModals";
import { AppRoot } from "@vkontakte/vkui";
import SnackBarProvider from "./SnackBarProvider";

const InitAppEntities = ({ children }: IInitAppEntities) => {
    return (
        <>
            <QueryProvider>
                <FavouritesProvider>
                    <InitCategories>
                        <AppRoot>
                            <InitAppModals>
                                <UserProvider>
                                    <SnackBarProvider>
                                        {children}
                                    </SnackBarProvider>
                                </UserProvider>
                            </InitAppModals>
                        </AppRoot>
                    </InitCategories>
                </FavouritesProvider>
            </QueryProvider>
        </>
    )
}

export default InitAppEntities;