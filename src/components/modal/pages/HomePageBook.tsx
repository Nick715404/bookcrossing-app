import { Div, Panel, PanelHeader, PanelHeaderBack, Image, Group, Text, CellButton } from "@vkontakte/vkui"
import { useUnit } from "effector-react"
import { $selectedBook } from "../../../store/modalBook"
import { setStatusActiveModal } from "../../../store/activeModal"
import { Icon24AddAwardsOutline, Icon24BookmarkAddBadgeOutline, Icon24Favorite, Icon24FolderAdd, Icon24Info, Icon24ListCheckOutline } from "@vkontakte/icons"
import "../../../styles/panels/modal.scss"
import React, { useEffect } from "react"

type Props = {
    id: string,
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

            </Div>  
            <Div className="groupBookInformation"style={{display: "flex", flexDirection: "row", alignItems: "end", paddingBottom: 0}}>
                    <Group separator="hide">
                        <Text weight="1" className="nameBook" style={{fontSize: "21px"}}>
                            {book && book.title}
                        </Text>
                        <Text weight="2" style={{fontSize: "18px"}}>
                            {book && book.author}
                        </Text>
                    </Group>
                    <Group style={{marginLeft: "10px"}}>
                        <CellButton>
                            <Icon24BookmarkAddBadgeOutline />
                        </CellButton>
                    </Group>
                </Div>  
            <Div>   
                <Group className="groupBookInformation">
                    <Text weight="2" style={{fontSize: "16px"}}>
                        Категория: {book && book.categoryTitle}
                    </Text>
                    <Text weight="3" style={{fontSize: "13px", color: "#818c99"}}>
                        ISBN: {book && book.isbn}
                    </Text>
                </Group>
                <Group></Group>
            </Div>

            <Group>
                <Div className="statusBook">
                    <Group separator="hide">
                        <Text style={{fontSize: "16px"}}>{book && book.state}</Text>
                    </Group>
                    <Group separator="hide">{statusBook}</Group>
                </Div>
            </Group>

            <Div style={{marginTop: '-25px'}}>
                <Group>
                    <Text>
                        Коментарий пользователя: {book && book.description}
                    </Text>
                    <Text>Книга живет в городе {/*city*/}</Text>
                </Group>
            </Div>
            
        </Panel>
    )
}

export default HomePageBook;