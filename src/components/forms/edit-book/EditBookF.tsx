import { $user } from "../../../store/user";
import { IBook, } from "../../../interfaces/interface";
import { initialStateSelectedBook } from "../../../constants/utils";
import { handleEditBook, handleFormValidation } from "../../../utilities/forms/edit-book.utils";

import { getCurentBookFX } from "../../../api/server/books/books";
import { $editingBook } from "../../../store/bookEditId";

import EditBookForm from "./EditBookForm";
import CompleteForm from "../complete-form/CompleteForm";
import { useUnit } from "effector-react";
import React, { useCallback, useMemo, useState, useEffect } from "react";

const EditBookF: React.FC = () => {
  const editingBook = useUnit($editingBook);
  const [formData, setFormData] = useState<IBook>(initialStateSelectedBook);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [withoutISBN, setWithoutISBN] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [go, setGo] = useState({
    start: false,
    bookId: ''
  });
  const [done, setDone] = useState<boolean>(false);

  const user = useUnit($user);


  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IBook) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleResetForm = useCallback(() => {
    setLoading(false);
    setFormData(initialStateSelectedBook);
    setFormErrors({});
    setWithoutISBN(false);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const author = typeof formData.author === 'string' ? formData.author : '';
    const userId: string | undefined = user.userId;

    const errors: { [key: string]: string } = {};
    handleFormValidation(author, errors);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }

    const result = await handleEditBook(userId, formData);

    if (result.id !== '') {
      setGo({
        start: true,
        bookId: result.id
      })
    }

    setDone(true);

    setLoading(false);
    handleResetForm();
  }, [formData, user]);

  useEffect(() => {
    if (editingBook !== null) {
      setFormData(editingBook);
    }
  }, [editingBook]);
  
  return (
    <>
      {done
        ?
        <CompleteForm action={() => setDone(false)} />
        :
        <EditBookForm
          formData={formData}
          formErrors={formErrors}
          go={go}
          handleChangeValue={handleChangeValue}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          setWithoutISBN={() => setWithoutISBN(!withoutISBN)}
          withoutISBN={withoutISBN}
        />
      }
    </>
  );
};

export default React.memo(EditBookF);