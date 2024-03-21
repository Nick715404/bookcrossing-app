import React from "react";

<<<<<<< HEAD
import { FormItem, Checkbox, Button } from "@vkontakte/vkui";
=======
import {
  FormItem,
  Input,
  Textarea,
  Button,
  Select,
  Checkbox,
  SplitLayout,
  SimpleCell,
  IconButton,
  ModalRoot,
  CellButton
} from "@vkontakte/vkui";
>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d

import { useState, useMemo } from "react";
import { createBookFX } from "../../../api/server/books/books";
import { ICreateBook, IDataState } from "../../../interfaces/interface";

<<<<<<< HEAD
import ImageInput from "../components/CustomFileInput/ImageInput";
import CustomInput from "../components/CustomInput/CustomInput";
import CategorySelect from "../components/CategorySelect/CategorySelect";
import QualitySelect from "../components/QualitySelect/QualitySelect";
import CustomTextarea from "../components/CustomTextarea/CustomTextarea";
=======
import ImageInput from "../components/ImageInput";
import CategoryInput from "../components/categoryInput";
import { Icon16InfoCircle, Icon16InfoOutline } from "@vkontakte/icons";
import ModalBookStatusDescription from "../../modal/modalBookStatusDescriptions/ModalBookStatusDescription";
import { setStatusActiveModal } from "../../../store/activeModal";
>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d

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

<<<<<<< HEAD
=======
  const options = useMemo(() => {
    return [
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

  // const [activeModal, setActiveModal] = useState<string | null>(null);

  // const changeActiveModal = (id: string | null) => {
  //   setActiveModal(id);
  // }

  // const modal = (
  //   <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>
  //     <ModalBookStatusDescription id={"statusDescription"} changeActiveModal={changeActiveModal} />
  //   </ModalRoot>
  // )

  const statusBook = (
    /*<SplitLayout modal={modal} style={{padding: 0, margin: 0}}>*/
      /*<SimpleCell  onClick={() => setActiveModal('statusDescription')}>*/
        <CellButton onClick={() => setStatusActiveModal('statusDescription')} style={{padding: 0, margin: 0}}>
          Состояние
        </CellButton>
      /*</SimpleCell>*/
    //  </SplitLayout>
  )

  // console.count('Rerender')

>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d
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
<<<<<<< HEAD
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
=======
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
        top={statusBook}
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
>>>>>>> 65cfac3c623fb4633ce34251c084129ae010b54d
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