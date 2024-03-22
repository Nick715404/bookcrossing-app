import React from "react";

import {
  FormItem,
  Input,
  Button,
  Select,
  Checkbox,
  CellButton
} from "@vkontakte/vkui";

import { useState } from "react";
import { createBookFX } from "../../../api/server/books/books";
import { ICreateBook, IDataState } from "../../../interfaces/interface";

import ImageInput from "../components/CustomFileInput/ImageInput";
import CategorySelect from "../components/CategorySelect/CategorySelect";
import { Icon16InfoCircle, Icon16InfoOutline } from "@vkontakte/icons";
import ModalBookStatusDescription from "../../modal/modalBookStatusDescriptions/ModalBookStatusDescription";
import { setStatusActiveModal } from "../../../store/activeModal";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomTextarea from "../components/CustomTextarea/CustomTextarea";
import QualitySelect from "../components/QualitySelect/QualitySelect";

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


  const statusBook = (
    /*<SplitLayout modal={modal} style={{padding: 0, margin: 0}}>*/
    /*<SimpleCell  onClick={() => setActiveModal('statusDescription')}>*/
    <CellButton onClick={() => setStatusActiveModal('statusDescription')} style={{ padding: 0, margin: 0 }}>
      Состояние
    </CellButton>
    /*</SimpleCell>*/
    //  </SplitLayout>
  )

  // console.count('Rerender')

  return (
    <form>
      <ImageInput />
      <CustomInput
        htmlFor="bookTitle"
        id="bookTitle"
        top="Название"
        placeholder="Мастер и маргарита"
        name="bookTitle"
        value={formData.title}
        onChange={(e) => handleChangeValue(e, 'title')}
        type="text"
      />
      <CustomInput
        htmlFor="bookAuthor"
        id="bookAuthor"
        top="Автор"
        placeholder="М. А. Булгаков"
        name="bookAuthor"
        value={formData.author}
        onChange={(e) => handleChangeValue(e, 'author')}
        type="text"
      />
      <QualitySelect
        value={formData.quality}
        onChange={(e) => handleChangeValue(e, 'quality')}
      />
      <CategorySelect
        value={formData.category}
        change={(e: any) => handleChangeValue(e, 'category')}
      />
      <CustomInput
        htmlFor="bookIsbn"
        id="bookIsbn"
        top="ISBN"
        placeholder="Введите ISBN"
        name="bookIsbn"
        value={formData.isbn}
        onChange={(e) => handleChangeValue(e, 'isbn')}
        type="text"
      />
      <FormItem htmlFor="bookCheckbox">
        <Checkbox id="bookCheckbox">ISBN отсутствует</Checkbox>
      </FormItem>
      <CustomTextarea />
    </form>
  )
})