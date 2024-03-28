// - Перенести сюда получение каталога, получение юзера
import { IInitAppEntities } from "../interfaces/interface";
import UserProvider from "./UserProvider";
import ShelfProvider from "./ShelfProvider";
import FavouritesProvider from "./FavouritesProvider";

const InitAppEntities = ({ children }: IInitAppEntities) => {
    return (
        <>
            <UserProvider>
                <ShelfProvider>
                    <FavouritesProvider>
                        {children}
                    </FavouritesProvider>
                </ShelfProvider>
            </UserProvider>
        </>
    )
}

export default InitAppEntities;