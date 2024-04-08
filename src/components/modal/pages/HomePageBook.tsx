import { $selectedBook } from "../../../store/modalBook"
import { setStatusActiveModal } from "../../../store/activeModal"
import { Icon24Info } from "@vkontakte/icons"
import { useStore, useUnit } from "effector-react"
import { CellButton, Div, Group, Panel, PanelHeader, PanelHeaderBack, Image, Text } from "@vkontakte/vkui"
import { $user } from "../../../store/user"
import { useEffect, useState } from "react"
import { getCurentBookFX } from "../../../api/server/books/books"

type Props = {
    id: string,
}

const HomePageBook = ({ id }: Props) => {
    const [book, user] = useUnit([$selectedBook, $user]);

    const [getBook, setBook] = useState(null); 
    
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

    

    // useEffect(() => {
    //     console.log(book);
    //     if (book?.id == null) {
    //     }
    // }, [])

    const statusBook = (
        <CellButton onClick={() => setStatusActiveModal('statusDescription')} style={{ padding: 0, margin: 0 }}>
            <Icon24Info />
        </CellButton>
    )

    const goBack = () => {
        window.history.back();
    };

    return (
        <Panel id={id}>
            <PanelHeader before={
                <PanelHeaderBack label="Назад" onClick={goBack} />
            }>
                Буккросинг
            </PanelHeader>

            <Div className="modalPage">
                <Group separator="hide" className="bookImg">
                    {/* {image} */}
                    <img src={book && book.imageId || ''} alt="" />
                </Group>

                <Group separator="hide" className="groupBookInformation">
                    <Text weight="1" className="nameBook">
                        {book && book.title}
                    </Text>
                    <Text weight="2">
                        {book && book.author}
                    </Text>
                </Group>

                <Group className="groupBookInformation">
                    <Text weight="2" style={{ fontSize: "16px" }}>
                        Категория: {book && book.categoryTitle}
                    </Text>
                    <Text weight="3" style={{ fontSize: "13px", color: "#818c99" }}>
                        ISBN: {book && book.isbn}
                    </Text>
                </Group>
                <Group></Group>
            </Div>

            <Group>
                <Div className="statusBook">
                    <Group separator="hide">
                        <Text style={{ fontSize: "16px" }}>{book && book.state}</Text>
                    </Group>
                    <Group separator="hide">{statusBook}</Group>
                </Div>
            </Group>

            <Div style={{ marginTop: '-25px' }}>
                <Group>
                    <Text>
                        Коментарий пользователя: {book && book.description}
                    </Text>
                    <Text>Книга живет в городе: {user && user.city}</Text>
                </Group>
            </Div>

        </Panel>
    )
}

export default HomePageBook;