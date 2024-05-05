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
                    <FavouritesProvider>
                        <InitCategories>
                            {children}
                        </InitCategories>
                    </FavouritesProvider>
            </QueryProvider>
        </>
    )
}

export default InitAppEntities;