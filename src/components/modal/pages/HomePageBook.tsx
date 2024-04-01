import { Div, Panel, PanelHeader, PanelHeaderBack, Image, Group, Text, CellButton } from "@vkontakte/vkui"
import { useUnit } from "effector-react"
import { $selectedBook } from "../../../store/modalBook"
import { setStatusActiveModal } from "../../../store/activeModal"
import { Icon24Info } from "@vkontakte/icons"
import "../../../styles/panels/modal.scss"
import { useEffect } from "react"

type Props = {
    id: string
}

const HomePageBook = ({id}: Props) => {
    const book = useUnit($selectedBook);
    
    const image = (
        <Image
          style={{ marginBottom: '0', marginTop: '0'}}
          className="book-img"
          size={200}
          borderRadius="m"
          src="/img/genres/genre1.jpg" />
      )
    
    useEffect(() => {
        console.log(book)
    }, [])

      const statusBook = (
        <>
            <CellButton onClick={() => setStatusActiveModal('statusDescription')} style={{padding: 0, margin: 0}}>
                <Icon24Info />
            </CellButton>
        </>
      )
    
    return (
        <Panel id={id}>
            <PanelHeader before={
                <PanelHeaderBack label="Назад" />
            }>
                Буккросинг
            </PanelHeader>

            <Div className="modalPage">
                <Group separator="hide" className="bookImg">
                    {image}
                    {/* <img src={book && book.imageId || ''} alt="" /> */}
                </Group>

                <Group separator="hide" className="groupBookInformation">
                    <Text weight="1" className="nameBook">
                        {book && book.title}
                        Название
                    </Text>
                    <Text weight="2">
                        {book && book.author}
                        Автор
                    </Text>
                </Group>

                <Group className="groupBookInformation">
                    <Text weight="2">
                        Категория: {book && book.categoryTitle}
                    </Text>
                    <Text weight="3">
                        ISBN: {book && book.isbn}
                    </Text>
                </Group>
                <Group></Group>
            </Div>

            <Group>
                <Div className="statusBook">
                    <Group separator="hide">
                        <Text>{book && book.state}</Text>
                    </Group>
                    <Group separator="hide">{statusBook}</Group>
                </Div>
            </Group>

            <Div style={{marginTop: '-25px'}}>
                <Group>
                    <Text>
                        Коментарий пользователя: {book && book.description} Заготовка заготовка заготовка заготовка заготовка заготовка заготовказаготовка заготовка
                    </Text>
                </Group>
            </Div>
            
        </Panel>
    )
}

export default HomePageBook;