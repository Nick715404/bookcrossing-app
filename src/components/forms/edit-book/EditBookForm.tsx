import CustomInput from '../components/CustomInput/CustomInput'
import ImageInput from '../components/CustomFileInput/ImageInput'
import QualitySelect from '../components/QualitySelect/QualitySelect'
import CategorySelect from '../components/CategorySelect/CategorySelect'
import CustomButton from '../../custom-button/CustomButton'

import { IBook } from '../../../interfaces/interface'
import CustomTextarea from '../components/CustomTextarea/CustomTextarea'
import CustomInputWithInfo from '../components/CustomInput/CustomInputWithInfo'

import { Checkbox, Div, FormItem, Group, Text } from '@vkontakte/vkui'
import { EditImageInput } from '../components/EditImageInput/EditImageInput'

interface IProps {
  handleSubmit: (e: React.FormEvent) => void;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>, field: keyof IBook) => void;
  formData: IBook;
  formErrors: any;
  withoutISBN: boolean;
  setWithoutISBN: (state: boolean) => void;
  isLoading: any;
  go: any
}

export default function EditBookForm({
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
        <EditImageInput bookId={go.bookId} go={go.start} />
        <CustomInput
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
          id="bookAuthor"
          placeholder="М. А. Булгаков"
          name="bookAuthor"
          value={formData.author || ''}
          onChange={(e) => handleChangeValue(e, 'author')}
          type="text"
          top={formErrors.author ? formErrors.author : 'Автор *'}
          htmlFor="bookAuthor"
          isRequired
          status={formErrors.author ? 'error' : 'default'}
        />
        <Div style={{ paddingTop: 0, paddingBottom: 0, marginTop: '-10px' }}>
          <Text weight='3' style={{ fontSize: "14px", color: '#6D7885' }}>Формат: И. О. Фамилия</Text>
        </Div>
        <QualitySelect
          nameBlock='Состояние *'
          goToModal='statusDescription'
          value={formData.state}
          onChange={(e) => handleChangeValue(e, 'state')}
        />
        <CategorySelect
          value={formData.categoryTitle || ''}
          onChange={(e: any) => handleChangeValue(e, 'categoryTitle')}
        />
        <CustomInputWithInfo
          readOnly={isLoading}
          id="bookIsbn"
          placeholder="Введите ISBN книги"
          name="bookIsbn"
          value={withoutISBN ? '' : formData.isbn}
          disabled={withoutISBN ? true : false}
          onChange={(e) => handleChangeValue(e, 'isbn')}
          type="number"
          nameBlock='ISBN *'
          htmlFor="bookIsbn"
          goToModal='transcriptISBN'
          isRequired={withoutISBN ? false : true} />
        <FormItem htmlFor="bookCheckbox">
          <Checkbox checked={formData.isbn === '' && true} onClick={() => setWithoutISBN(!withoutISBN)} id="bookCheckbox">ISBN отсутствует</Checkbox>
        </FormItem>
        <CustomTextarea
          value={formData.description || ''}
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