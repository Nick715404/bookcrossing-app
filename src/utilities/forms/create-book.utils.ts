export const handleFormValidation = (author: string, errors: any) => {
  if (!author.trim()) {
    errors.author = 'Поле "Автор" обязательно для заполнения';
  } else if (!/^([А-ЯЁ]\.\s[А-ЯЁ]\.\s[А-ЯЁ][а-яё]+)$/.test(author.trim())) {
    errors.author = 'Введите ФИО в формате: И. О. Фамилия';
  }
};