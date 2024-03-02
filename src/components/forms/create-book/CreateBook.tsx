import {
  FormItem,
  Input,
  NativeSelect,
  Textarea,
  Button,
  Select
} from "@vkontakte/vkui";
import { options } from "../../../constants/select-options";

export default function CreateBook() {

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Картинка книги */}
      <FormItem>
        {/* Тут будет кастомное поле с картинкой */}
      </FormItem>
      {/* Название книги */}
      <FormItem
        htmlFor="bookTitle"
        top='Название'
      >
        <Input
          id="bookTitle"
          placeholder="Введите название"
          type="text"
          name="title"
          required
        />
      </FormItem>
      {/* Автор книги */}
      <FormItem
        top='Автор'
        htmlFor="bookAuthor"
      >
        <Input
          id="bookAuthor"
          placeholder="Введите ФИО автора"
          type="text"
          name="author"
          required
        />
      </FormItem>
      {/* Состояние книги */}
      <FormItem
        top='Состояние'
        htmlFor="bookQuality"
      >
        <Select
          id="bookQuality"
          placeholder="Выберите состояние книги"
          name="quality"
          options={options} />
      </FormItem>
      {/* Жанры книги */}
      <FormItem
        top='Категории'
        htmlFor="bookQuality"
      >
        <NativeSelect
          id="bookGenre"
          placeholder="Выберите жанр книги"
          name="genre"
        >
          <option value="bad">Запрос на все жанры</option>
        </NativeSelect>
      </FormItem>
      {/* ISBN книги */}
      <FormItem
        top='ISBN'
        htmlFor="bookIsbn"
      >
        <Input
          id="bookIsbn"
          placeholder="Введите ISBN книги"
          type="text"
          name="isbn"
          required
        />
      </FormItem>
      {/* Комментарий к книге */}
      <FormItem
        top='Комментарий'
        htmlFor="bookDescription"
      >
        <Textarea
          id="bookDescription"
          placeholder="Добавьте комментарий"
          name="description"
        />
      </FormItem>
      {/* Кнопка отправить форму */}
      <FormItem>
        <Button stretched size="l">Сохранить</Button>
      </FormItem>
    </form >
  )
}