
// - Перенести сюда получение каталога, получение юзера

import { useEffect } from "react";
import { IInitAppEntities } from "../interfaces/interface";
import UserProvider from "./UserProvider";
import ShelfProvider from "./ShelfProvider";

const InitAppEntities = ({ children }: IInitAppEntities) => {
    return (
        <>
            <UserProvider>
                <ShelfProvider>
                    {children}
                </ShelfProvider>
            </UserProvider>
        </>
    )
}

export default InitAppEntities;