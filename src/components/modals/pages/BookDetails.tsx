import { setStatusActiveModal } from "../../../store/activeModal";
import ToFav from '../../toFav/toFav';
import { IBook } from "../../../interfaces/interface";
import { CustomImage } from "../../CustomImage/CustomImage";
import { Icon24Info } from "@vkontakte/icons";
import {
  Div,
  Group,
  Text,
  Separator,
  CellButton
} from "@vkontakte/vkui";


type BookDetailsProps = {
  book: IBook;
  ownerCity: string | null;
  isFavorite: boolean | undefined;
  isLoading?: boolean;
};

const BookDetails = ({ book, ownerCity, isFavorite, isLoading }: BookDetailsProps) => {
  return (
    <Div>
      <Group separator="hide" className="bookImg">
        <CustomImage bookId={book.id} />
      </Group>
      <Div className='book-top-row'>
        <Text weight="1" className="nameBook">
          {book.title}
        </Text>
        <Div className="book-top-row__btn">
          <ToFav ownerId={book.owner} bookId={book.id} isFav={isFavorite} />
        </Div>
      </Div>
      <Text weight="3" className="bookAuthor">
        {book.author}
      </Text>
      <Text weight="3" className="bookCategory">
        Категория: {book.categoryTitle}
      </Text>
      <Text weight="3" className="bookIsbn">
        ISBN: {book.isbn ? book.isbn : "Не указан"}
      </Text>
      <Separator style={{ padding: '10px 0px' }} />
      <Div style={{ display: 'flex', alignItems: 'center', padding: '0', marginTop: '-10px' }}>
        <Text className="bookText">
          Состояние: {book.state}
        </Text>
        <CellButton className="bookInfo" style={{ padding: 0, margin: '0 0 0 0' }}>
          <Icon24Info onClick={() => setStatusActiveModal('statusDescription')} />
        </CellButton>
      </Div>
      <Text className="bookText">
        Коментарий пользователя:<br /> {book.description ? book.description : 'Описание не указано'}
      </Text>
      <Text className="bookText">
        Книга живет в городе: {ownerCity || 'Загрузка...'}
      </Text>
    </Div>
  )
};

export default BookDetails;
