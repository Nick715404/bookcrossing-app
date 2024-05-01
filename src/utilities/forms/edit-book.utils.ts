import { editBookFX } from "../../api/server/books/books";
import { IBook } from "../../interfaces/interface";

export const handleFormValidation = (author: string, errors: any) => {
  if (!author.trim()) {
    errors.author = 'Поле "Автор" обязательно для заполнения';
  } else if (!/^([А-ЯЁ]\.[А-ЯЁ]\.\s[А-ЯЁ][а-яё]+)$/.test(author.trim())) {
    errors.author = 'Введите ФИО в формате: О.И. Фамилия';
  }
};

export const handleEditBook = async (userId: string | undefined, formData: IBook) => {
  const data = { ...formData, userId: userId };
  return await editBookFX(data);
};