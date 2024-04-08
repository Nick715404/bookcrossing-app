import { $selectedBook } from "../../../store/modalBook"
import { setStatusActiveModal } from "../../../store/activeModal"
import { Icon24Info } from "@vkontakte/icons"
import { useUnit } from "effector-react"
import { CellButton, Div, Group, Panel, PanelHeader, PanelHeaderBack, Image, Text, Separator } from "@vkontakte/vkui"
import { $user } from "../../../store/user"
import { useEffect, useState } from "react"
import { getBookImage } from "../../../api/server/images/image"
import { getCurentBookFX } from "../../../api/server/books/books"

type Props = {
    id: string,
}

const HomePageBook = ({ id }: Props) => {
    const [book, user] = useUnit([$selectedBook, $user]);
    const [path, setPath] = useState<string>('');
    const [getBook, setBook] = useState(null); 
    const loading = 'Загрузка, пожалуйста подождите';

    useEffect(() => {
        async function getFiles() {
            const images = await getBookImage(book.id);
            if (!images) return
            setPath(images ? images.path : '');
        }
        getFiles();
    }, []);

    useEffect(() => {
        // const data = getCurentBookFX(book?id)
        // setBook(data)

        const getCurentBook = async () => {
            try {
                const data = book ? await getCurentBookFX(book.id) : undefined;
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        }

        getCurentBook();
    }, []);


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
                    <Text weight="1" className="nameBook">
                        {book.title ? book.title : loading}
                    </Text>
                    <Text weight="3" className="bookAuthor">
                        {book.author ? book.author : loading}
                    </Text>
                    <Text weight="3" className="bookCategory">
                        Категория: {book.categoryTitle ? book.categoryTitle : loading}
                    </Text>
                    <Text weight="3" className="bookIsbn">
                        ISBN: {book.isbn ? book.isbn : loading}
                    </Text>
                    <Separator style={{ padding: '20px 0px' }} />
                    <Group className="info" style={{display: 'flex'}}>
                        <Text className="bookText">
                            Состояние: {book.state ? book.state : loading}
                        </Text>
                        <CellButton className="bookInfo" onClick={() => setStatusActiveModal('statusDescription')} style={{ padding: 0, margin: 0 }}>
                            <Icon24Info />
                        </CellButton>
                    </Group>
                    <Text className="bookText">
                        Коментарий пользователя: {book.description ? book.description : loading}
                    </Text>
                    <Text className="bookText">
                        Книга живет в городе: {user && user.city}
                    </Text>
                </Div>
            </Group>
        </Panel >
    )
}

export default HomePageBook;