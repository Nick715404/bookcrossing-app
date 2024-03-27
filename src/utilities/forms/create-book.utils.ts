import { createBookFX } from "../../api/server/books/books";
import { IDataState } from "../../interfaces/interface";

export const handleFormValidation = (author: string, errors: any) => {
  if (!author.trim()) {
    errors.author = 'Поле "Автор" обязательно для заполнения';
  } else if (!/^([А-ЯЁ]\.[А-ЯЁ]\.\s[А-ЯЁ][а-яё]+)$/.test(author.trim())) {
    errors.author = 'Введите ФИО в формате: О.И. Фамилия';
  }
};

export const handleCreateBook = async (userId: string | undefined, formData: IDataState) => {
  const data = { ...formData, userId: userId };
  return await createBookFX(data);
};