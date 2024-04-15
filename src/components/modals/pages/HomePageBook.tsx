import { $selectedBook } from "../../../store/modalBook"
import { setStatusActiveModal } from "../../../store/activeModal"
import { $user } from "../../../store/user"
import { getBookImage } from "../../../api/server/images/image"
import { getCurentBookFX } from "../../../api/server/books/books"

import ToFav from "../../toFav/toFav"

import { useEffect, useState } from "react"
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
import { useParams } from "@vkontakte/vk-mini-apps-router"

type Props = {
    id: string
}

const HomePageBook = ({ id }: Props) => {
    const [book, user] = useUnit([$selectedBook, $user]);
    const [path, setPath] = useState<string>('');
    const [getBook, setBook] = useState(null);
    const params = useParams();
    const paramsId = params?.id;
    

    useEffect(() => {
        const getCurrentBook = async () => {
            try {
                const data = book ? await getCurentBookFX(book.id) : undefined;
                setBook(data);
                const images = await getBookImage(book.id);
                if (!images) return
                setPath(images ? images.path : '');
            } catch (error) {
                console.log(error);
            }
        }
        getCurrentBook();
    }, []);

    // useEffect(() => {
    //     console.log(id)
    //     if (!book) {
    //         const getCurrentBook = async () => {
    //             try {
    //                 const data = await getCurentBookFX(paramsId);
    //                 setBook(data);
    //                 const images = await getBookImage(paramsId);
    //                 if (!images) return
    //                 setPath(images ? images.path : '');
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //         getCurrentBook();
    //         console.log(getBook)
    //     }
    // }, [id]);

    const headerBefore = (
        <PanelHeaderBack label="Назад" onClick={() => window.history.back()} />
    )

    return (
        <Panel id={id}>
            <PanelHeader before={headerBefore}>Буккросинг</PanelHeader>
            <Group className="modalPage">
                <Div>
                    <Group separator="hide" className="bookImg">
                        <Image
                            className="book-img"
                            borderRadius="m"
                            src={'http://localhost:3100/' + path}
                        />
                    </Group>
                    <Div className='book-top-row'>
                        <Text weight="1" className="nameBook">
                            {book.title ? book.title : 'Нет названия'}
                        </Text>
                        <Div className="book-top-row__btn">
                            <ToFav bookId={book.id} isFav={book.favourite} />
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