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
import { useParams, useRouteNavigator } from "@vkontakte/vk-mini-apps-router"
import { IBook } from "../../../interfaces/interface"
import { useCurrentBook } from "../../../hooks/useCurrentBook"
import { CustomImage } from "../../CustomImage/CustomImage"

type Props = {
  id: string
}

const HomePageBook = ({ id }: Props) => {
  const [book, user] = useUnit([$selectedBook, $user]);
  const params = useParams();
  const paramsId = params?.id;
  const navigator = useRouteNavigator();

  const { data } = useCurrentBook({ bookId: '', paramsId: paramsId });

  const headerBefore = (
    <PanelHeaderBack label="Назад" onClick={() => navigator.push('/')} />
  )

  return (
    <>
      {
        data &&
        <Panel id={id}>
          <PanelHeader before={headerBefore}>Буккросинг</PanelHeader>
          <Group className="modalPage">
            <Div>
              <Group separator="hide" className="bookImg">
                <CustomImage bookId={data.id} />
              </Group>
              <Div className='book-top-row'>
                <Text weight="1" className="nameBook">
                  {data.title}
                </Text>
                <Div className="book-top-row__btn">
                  <ToFav bookId={book.id} isFav={book.favourite} />
                </Div>
              </Div>
              <Text weight="3" className="bookAuthor">
                {data.author}
              </Text>
              <Text weight="3" className="bookCategory">
                Категория: {data.categoryTitle}
              </Text>
              <Text weight="3" className="bookIsbn">
                ISBN: {data.isbn}
              </Text>
              <Separator style={{ padding: '20px 0px' }} />
              <Div style={{ display: 'flex', alignItems: 'center', padding: '0' }}>
                <Text className="bookText">
                  Состояние: {data.state}
                </Text>
                <CellButton className="bookInfo" style={{ padding: 0, margin: '0 0 10px 0' }}>
                  <Icon24Info onClick={() => setStatusActiveModal('statusDescription')} />
                </CellButton>
              </Div>
              <Text className="bookText">
                Коментарий пользователя: {data.description}
              </Text>
              <Text className="bookText">
                Книга живет в городе: {user.city ? user.city : 'Город не распознан'}
              </Text>
            </Div>
            <Div style={{ marginTop: '40px' }}>
              <Button href={`https://vk.com/im?sel=${data.owner}`} size="l" stretched>Написать владельцу</Button>
            </Div>
          </Group>
        </Panel >
      }
    </>
  )
}

export default HomePageBook;
