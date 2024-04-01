// - Перенести сюда получение каталога, получение юзера
import { IInitAppEntities } from "../interfaces/interface";
import UserProvider from "./UserProvider";
import ShelfProvider from "./ShelfProvider";
import FavouritesProvider from "./FavouritesProvider";
import BooksProvider from "./BooksProvider";

const InitAppEntities = ({ children }: IInitAppEntities) => {
    return (
        <>
            <UserProvider>
                <ShelfProvider>
                    <FavouritesProvider>
                        <BooksProvider>
                            {children}
                        </BooksProvider>
                    </FavouritesProvider>
                </ShelfProvider>
            </UserProvider>
        </>
    )
}

export default InitAppEntities;