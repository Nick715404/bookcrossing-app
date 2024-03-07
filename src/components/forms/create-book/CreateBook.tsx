import React from "react";

import {
  FormItem,
  Input,
  Textarea,
  Button,
  Select,
  Checkbox
} from "@vkontakte/vkui";

import { useState, useMemo } from "react";
import { createBookFX } from "../../../api/server/books/books";
import { IDataState } from "../../../interfaces/interface";

import ImageInput from "../components/ImageInput";
import CategoryInput from "../components/categoryInput";

export default React.memo(function CreateBook() {

  const [formData, setFormData] = useState<IDataState>({
    title: '',
    author: '',
    quality: '',
    category: '',
    isbn: '',
    descr: ''
  });

  const setData = () => {
    return {
      bookTitle: formData.title,
      bookAuthor: formData.author,
      bookQuality: formData.quality,
      bookCategory: formData.category,
      bookIsbn: formData.isbn,
      bookDesr: formData.descr
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createBookFX(setData());

    setFormData(prev => {
      return {
        ...prev,
        title: '',
        author: '',
        quality: '',
        category: options[0].label,
        isbn: '',
        descr: ''
      }
    })
  }

  const options = useMemo(() => {
    return [
      {
        value: 'Выберите состояние книги',
        label: 'Отличное'
      },
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
  }, []);

  // console.count('Rerender')

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
          value={formData.title}
          onChange={(e) => setFormData(prev => {
            return {
              ...prev,
              title: e.target.value
            }
          })}
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
          value={formData.author}
          onChange={(e) => setFormData(prev => {
            return {
              ...prev,
              author: e.target.value
            }
          })}
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
          // value={formData.quality}
          onChange={(e) => setFormData(prev => {
            return {
              ...prev,
              quality: e.target.value,
            }
          })}
        />
      </FormItem>
      {/* Категории книги */}
      <CategoryInput value={formData.category} change={(e: any) => setFormData(prev => {
        return {
          ...prev,
          category: e.target.value
        }
      })} />
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
          value={formData.isbn}
          onChange={(e) => setFormData(prev => {
            return {
              ...prev,
              isbn: e.target.value
            }
          })}
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
          value={formData.descr}
          onChange={(e) => setFormData(prev => {
            return {
              ...prev,
              descr: e.target.value
            }
          })}
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