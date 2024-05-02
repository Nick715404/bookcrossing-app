import { $selectedBook } from "../../../store/modalBook"
import { setStatusActiveModal } from "../../../store/activeModal"
import { $user } from "../../../store/user"
import { useParams, useRouteNavigator } from "@vkontakte/vk-mini-apps-router"
import { useCurrentBook } from "../../../hooks/useCurrentBook"
import { CustomImage } from "../../CustomImage/CustomImage"

import ToFav from "../../toFav/toFav"

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
import { $favBooks } from "../../../store/favorites"
import { checkBookInFavorites } from "../../../utilities/books/books.utils"

type Props = {
  id: string
}

const HomePageBook = ({ id }: Props) => {
  const [book, user, favorites] = useUnit([$selectedBook, $user, $favBooks]);
  const params = useParams();
  const paramsId = params?.id;
  const navigator = useRouteNavigator();
  const { data } = useCurrentBook({ bookId: '', paramsId: paramsId });
  const status = data && checkBookInFavorites(data, favorites);

  const headerBefore = (
    <PanelHeaderBack label="Назад" onClick={() => navigator.back()} />
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
                  <ToFav ownerId={book.owner} bookId={book.id} isFav={status ? true : false} />
                </Div>
              </Div>
              <Text weight="3" className="bookAuthor">
                {data.author}
              </Text>
              <Text weight="3" className="bookCategory">
                Категория: {data.categoryTitle}
              </Text>
              <Text weight="3" className="bookIsbn">
                ISBN: {data.isbn ? data.isbn : "Не указан"}
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

