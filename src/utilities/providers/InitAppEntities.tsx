import { IInitAppEntities } from "../../interfaces/interface";
import UserProvider from "./UserProvider";
import FavouritesProvider from "./FavouritesProvider";
// import BooksProvider from "./BooksProvider";
import InitCategories from "./InitCategories";
import { QueryProvider } from "./QueryProvider";

const InitAppEntities = ({ children }: IInitAppEntities) => {
    return (
        <>
            <QueryProvider>
                <UserProvider>
                    <FavouritesProvider>
                        <InitCategories>
                            {children}
                        </InitCategories>
                    </FavouritesProvider>
                </UserProvider>
            </QueryProvider>
        </>
    )
}

export default InitAppEntities;