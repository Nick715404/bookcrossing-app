import {
  FormItem,
  Input,
  NativeSelect,
  Textarea,
  Button,
  Select
} from "@vkontakte/vkui";

import { options } from "../../../constants/select-options";
import { useEffect, useState } from "react";
import { createBookFX } from "../../../api/server/books/books";

import ImageInput from "../components/ImageInput";

export default function CreateBook() {

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [quality, setQuality] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [isbn, setIsbn] = useState<string>('');
  const [descr, setDescr] = useState<string>('');

  const setData = () => {
    return {
      bookTitle: title,
      bookAuthor: author,
      bookQuality: quality,
      bookGanre: genre,
      bookIsbn: isbn,
      bookDesr: descr
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createBookFX(setData());

    
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Картинка книги */}
      <FormItem>
        <ImageInput />
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
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
          options={options}
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
        />
      </FormItem>
      {/* Жанры книги */}
      <FormItem
        top='Жанр'
        htmlFor="bookQuality"
      >
        <NativeSelect
          id="bookGenre"
          placeholder="Выберите жанр книги"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
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
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
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
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        />
      </FormItem>
      {/* Кнопка отправить форму */}
      <FormItem>
        <Button
          type="submit"
          stretched
          size="l"
        >Сохранить</Button>
      </FormItem>
    </form >
  )
}