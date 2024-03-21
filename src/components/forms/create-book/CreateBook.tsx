import React from "react";

import { FormItem, Checkbox, Button } from "@vkontakte/vkui";

import { useState, useMemo } from "react";
import { createBookFX } from "../../../api/server/books/books";
import { ICreateBook, IDataState } from "../../../interfaces/interface";

import ImageInput from "../components/CustomFileInput/ImageInput";
import CustomInput from "../components/CustomInput/CustomInput";
import CategorySelect from "../components/CategorySelect/CategorySelect";
import QualitySelect from "../components/QualitySelect/QualitySelect";
import CustomTextarea from "../components/CustomTextarea/CustomTextarea";

export default React.memo(function CreateBook() {

  const [formData, setFormData] = useState<IDataState>({
    title: '',
    author: '',
    quality: '',
    category: '',
    isbn: '',
    descr: ''
  });

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>, state: string) => {
    setFormData(prev => ({ ...prev, [state]: e.target.value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const setData = () => {
      return {
        title: formData.title,
        author: formData.author,
        state: formData.quality,
        categoryTitle: formData.category,
        isbn: formData.isbn,
        description: formData.descr
      }
    }
    createBookFX(setData());
    setFormData(prev => {
      return {
        ...prev,
        title: '',
        author: '',
        quality: '',
        category: '',
        isbn: '',
        descr: ''
      }
    })
  }

  return (
    <form>
      <ImageInput />
      <CustomInput
        id="bookTitle"
        placeholder="Введите название"
        top="Название"
        name="bookTitle"
        type="text"
        isRequired
        htmlFor="bookTitle"
        value={formData.title}
        onChange={(e) => handleChangeValue(e, 'title')}
      />
      <CustomInput
        id="bookAuthor"
        placeholder="Введите ФИО Автора"
        top="Автор"
        name="bookAuthor"
        type="text"
        isRequired
        htmlFor="bookAuthor"
        value={formData.author}
        onChange={(e) => handleChangeValue(e, 'author')}
      />
      <QualitySelect
        value={formData.quality}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeValue(e, 'quality')}
      />
      <CategorySelect
        value={formData.category}
        change={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeValue(e, 'category')}
      />
      <CustomInput
        id="bookIsbn"
        placeholder="Введите ISBN"
        top="ISBN"
        name="bookIsbn"
        type="text"
        isRequired
        htmlFor="bookIsbn"
        value={formData.isbn}
        onChange={(e) => handleChangeValue(e, 'isbn')}
      />
      <FormItem htmlFor="bookCheckbox">
        <Checkbox id="bookCheckbox">ISBN отсутсвует</Checkbox>
      </FormItem>
      <CustomTextarea />
      {/* <FormItem htmlFor="bookBtn">
        <Button
          id="bookBtn"
          type="submit"
          size="l"
          stretched
        >
          Сохранить
        </Button>
      </FormItem> */}
    </form>
  )
})