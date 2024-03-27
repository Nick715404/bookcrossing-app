
// - Перенести сюда получение каталога, получение юзера

import { IInitAppEntities } from "../interfaces/interface";

const InitAppEntities = ({children}: IInitAppEntities) => {
    return (
        <>
            {children}
        </>
    )
}

export default InitAppEntities;