import { $selectedBook } from "../../../store/modalBook"
import { setStatusActiveModal } from "../../../store/activeModal"
import { $user } from "../../../store/user"
import { useParams, useRouteNavigator } from "@vkontakte/vk-mini-apps-router"

import ToFav from "../../toFav/toFav"
import HomePageBookServer from "./HomePageBookServer"

import { CustomImage } from "../../CustomImage/CustomImage"
import { useCurrentBook } from "../../../hooks/useCurrentBook"

import { Icon24Info } from "@vkontakte/icons"
import { useUnit } from "effector-react"
import {
    CellButton,
    Div,
    Group,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Image,
    Text,
    Separator,
    Button
} from "@vkontakte/vkui"
import { checkBookInFavorites } from "../../../utilities/books/books.utils"
import { $favBooks } from "../../../store/favorites"

type Props = {
    id: string
}

const HomePageBook = ({ id }: Props) => {
    const [book, user, favorites] = useUnit([$selectedBook, $user, $favBooks]);
    const params = useParams();
    const paramsId = params?.id;
    const navigator = useRouteNavigator();
    const status = checkBookInFavorites(book, favorites);

    const { data } = useCurrentBook({ bookId: '', paramsId: paramsId });

    const headerBefore = (
        <PanelHeaderBack label="Назад" onClick={() => navigator.back()} />
    )

    if (data) {
        return (
            <HomePageBookServer id={id} />
        )
    }

    return (
        <Panel id={id}>
            <PanelHeader before={headerBefore}>Буккросинг</PanelHeader>
            <Group className="modalPage">
                <Div>
                    <Group separator="hide" className="bookImg">
                        <CustomImage bookId={book.id} />
                    </Group>
                    <Div className='book-top-row'>
                        <Text weight="1" className="nameBook">
                            {book.title ? book.title : 'Нет названия'}
                        </Text>
                        <Div className="book-top-row__btn">
                            <ToFav ownerId={book.owner} bookId={book.id} isFav={status} />
                        </Div>
                    </Div>
                    <Text weight="3" className="bookAuthor">
                        {book.author ? book.author : 'Нет автора'}
                    </Text>
                    <Text weight="3" className="bookCategory">
                        Категория: {book.categoryTitle ? book.categoryTitle : 'Нет категории'}
                    </Text>
                    <Text weight="3" className="bookIsbn">
                        ISBN: {book.isbn ? book.isbn : 'Нет isbn'}
                    </Text>
                    <Separator style={{ padding: '20px 0px' }} />
                    <Div style={{ display: 'flex', alignItems: 'center', padding: '0' }}>
                        <Text className="bookText">
                            Состояние: {book.state ? book.state : 'Не указано состояние'}
                        </Text>
                        <CellButton className="bookInfo" style={{ padding: 0, margin: '0 0 10px 0' }}>
                            <Icon24Info onClick={() => setStatusActiveModal('statusDescription')} />
                        </CellButton>
                    </Div>
                    <Text className="bookText">
                        Коментарий пользователя: {book.description ? book.description : 'Нет комментария'}
                    </Text>
                    <Text className="bookText">
                        Книга живет в городе: {user.city ? user.city : 'Город не распознан'}
                    </Text>
                </Div>
                <Div style={{ marginTop: '40px' }}>
                    <Button size="l" stretched>Написать владельцу</Button>
                </Div>
            </Group>
        </Panel >
    )
}

export default HomePageBook;