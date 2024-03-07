import React from "react";

import {
  FormItem,
  Input,
  Textarea,
  Button,
  Select,
  Checkbox
} from "@vkontakte/vkui";

import { useState } from "react";
import { createBookFX } from "../../../api/server/books/books";

import ImageInput from "../components/ImageInput";
import CategoryInput from "../components/categoryInput";

export default React.memo(function CreateBook() {

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [quality, setQuality] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string>('');
  const [isbn, setIsbn] = useState<string>('');
  const [descr, setDescr] = useState<string>('');

  const setData = () => {
    return {
      bookTitle: title,
      bookAuthor: author,
      bookQuality: quality,
      bookCategory: category,
      bookIsbn: isbn,
      bookDesr: descr
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createBookFX(setData());

    setTitle('');
    setAuthor('');
    setQuality('');
    setCategory('');
    setIsbn('');
    setDescr('');
  }

  const options = [
    {
      value: 'Отличное состояние',
      label: 'Отличное'
    },
    {
      value: 'Хорошее состояние',
      label: 'Хорошее'
    },
    {
      value: 'Примелимое состояние',
      label: 'Приемлимое'
    },
    {
      value: 'Плохое состояние',
      label: 'Плохое'
    },
  ];

  console.count('Rerender')

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
        // status={author ? 'valid' : 'error'}
        // bottom={
        //   author ? 'Автор введен верно!' : 'Введите в формате - "Фамилия И. О."'
        // }
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
      {/* Категории книги */}
      <CategoryInput value={category} change={(e: any) => setCategory(e.target.value)} />
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
      {/* Есть ли isbn */}
      <FormItem>
        <Checkbox>ISBN отсутствует</Checkbox>
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
})