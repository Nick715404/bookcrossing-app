import CustomInput from '../components/CustomInput/CustomInput'
import ImageInput from '../components/CustomFileInput/ImageInput'
import QualitySelect from '../components/QualitySelect/QualitySelect'
import CategorySelect from '../components/CategorySelect/CategorySelect'
import CustomButton from '../../custom-button/CustomButton'

import { IDataState } from '../../../interfaces/interface'
import CustomTextarea from '../components/CustomTextarea/CustomTextarea'

import { Checkbox, FormItem, Group } from '@vkontakte/vkui'

interface IProps {
  handleSubmit: (e: React.FormEvent) => void;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>, field: keyof IDataState) => void;
  formData: IDataState;
  formErrors: any;
  withoutISBN: boolean;
  setWithoutISBN: (state: boolean) => void;
  isLoading: any;
  go: any
}

export default function CreateBookForm({
  handleSubmit,
  handleChangeValue,
  formData,
  formErrors,
  withoutISBN,
  setWithoutISBN,
  isLoading,
  go
}: IProps) {
  return (
    <Group>
      <form onSubmit={handleSubmit}>
        <ImageInput go={go.start} bookId={go.bookId} />
        <CustomInput
          readOnly={isLoading}
          id="bookTitle"
          placeholder="Мастер и Маргарита"
          name="bookTitle"
          value={formData.title}
          onChange={(e) => handleChangeValue(e, 'title')}
          type="text"
          top="Название *"
          htmlFor="bookTitle"
          isRequired
        />
        <CustomInput
          readOnly={isLoading}
          id="bookAuthor"
          placeholder="М. А. Булгаков"
          name="bookAuthor"
          value={formData.author}
          onChange={(e) => handleChangeValue(e, 'author')}
          type="text"
          top={formErrors.author ? formErrors.author : 'Автор *'}
          htmlFor="bookAuthor"
          isRequired
          status={formErrors.author ? 'error' : 'default'}
        />
        <QualitySelect
          value={formData.state}
          onChange={(e) => handleChangeValue(e, 'state')}
        />
        <CategorySelect
          value={formData.categoryTitle}
          onChange={(e: any) => handleChangeValue(e, 'categoryTitle')}
        />
        <CustomInput
          readOnly={isLoading}
          id="bookIsbn"
          placeholder="Введите ISBN книги"
          name="bookIsbn"
          value={withoutISBN ? '' : formData.isbn}
          disabled={withoutISBN ? true : false}
          onChange={(e) => handleChangeValue(e, 'isbn')}
          type="number"
          top="ISBN"
          htmlFor="bookIsbn"
          isRequired={withoutISBN ? false : true}
        />
        <FormItem htmlFor="bookCheckbox">
          <Checkbox onClick={() => setWithoutISBN(!withoutISBN)} id="bookCheckbox">ISBN отсутствует</Checkbox>
        </FormItem>
        <CustomTextarea
          value={formData.description}
          onChange={(e: any) => handleChangeValue(e, 'description')}
        />
        <FormItem>
          <CustomButton
            type='submit'
            text="Сохранить"
            size="l"
            isStretched
            isLoading={isLoading}
          />
        </FormItem>
        {/* <>{IsbnInfo}</> */}
      </form>
    </Group>
  )
}