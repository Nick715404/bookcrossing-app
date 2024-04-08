import { IInitAppEntities } from "../../interfaces/interface";
import UserProvider from "./UserProvider";
import ShelfProvider from "./ShelfProvider";
import FavouritesProvider from "./FavouritesProvider";
import BooksProvider from "./BooksProvider";
import InitCategories from "./InitCategories";

const InitAppEntities = ({ children }: IInitAppEntities) => {
    return (
        <>
            <UserProvider>
                <ShelfProvider>
                    <FavouritesProvider>
                        <BooksProvider>
                            <InitCategories>
                                {children}
                            </InitCategories>
                        </BooksProvider>
                    </FavouritesProvider>
                </ShelfProvider>
            </UserProvider>
        </>
    )
}

export default InitAppEntities;