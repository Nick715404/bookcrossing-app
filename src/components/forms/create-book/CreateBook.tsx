import ImageInput from "../components/CustomFileInput/ImageInput";
import CategorySelect from "../components/CategorySelect/CategorySelect";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomTextarea from "../components/CustomTextarea/CustomTextarea";
import QualitySelect from "../components/QualitySelect/QualitySelect";
import CustomButton from "../../custom-button/CustomButton";
import { $user } from "../../../store/user";
import { IBook, IDataState, } from "../../../interfaces/interface";
import { initialState } from "../../../constants/utils";
import React, { useState } from "react";
import { useUnit } from "effector-react";
import { FormItem, Button, Checkbox } from "@vkontakte/vkui";
import { handleCreateBook, handleFormValidation } from "../../../utilities/forms/create-book.utils";

const CreateBook: React.FC = () => {
  const [formData, setFormData] = useState<IDataState>(initialState);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [withoutISBN, setWithoutISBN] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [go, setGo] = useState({
    start: false,
    bookId: ''
  });

  const user = useUnit($user);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IDataState) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleResetForm = () => {
    setLoading(false);
    setFormData(initialState);
    setFormErrors({});
    setWithoutISBN(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { author } = formData;
    const userId: string | undefined = user.userId;

    const errors: { [key: string]: string } = {};
    handleFormValidation(author, errors);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    };

    const result = await handleCreateBook(userId, formData);

    if (result.id !== '') {
      setGo({
        start: true,
        bookId: result.id
      })
    }

    console.log('Book has been created!')
    setLoading(false);
    handleResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ImageInput go={go.start} bookId={go.bookId} />
      <CustomInput
        id="bookTitle"
        placeholder="Мастер и Маргарита"
        name="bookTitle"
        value={formData.title}
        onChange={(e) => handleChangeValue(e, 'title')}
        type="text"
        top="Название"
        htmlFor="bookTitle"
        isRequired
      />
      <CustomInput
        id="bookAuthor"
        placeholder="М. А. Булгаков"
        name="bookAuthor"
        value={formData.author}
        onChange={(e) => handleChangeValue(e, 'author')}
        type="text"
        top={formErrors.author ? formErrors.author : 'Автор'}
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
        id="bookIsbn"
        placeholder="Введите ISBN книги"
        name="bookIsbn"
        value={withoutISBN ? '' : formData.isbn}
        disabled={withoutISBN ? true : false}
        onChange={(e) => handleChangeValue(e, 'isbn')}
        type="text"
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
    </form>
  );
};

export default React.memo(CreateBook);