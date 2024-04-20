import { $user } from "../../../store/user";
import { IDataState, } from "../../../interfaces/interface";
import { initialState } from "../../../constants/utils";
import { handleCreateBook, handleFormValidation } from "../../../utilities/forms/create-book.utils";

import CreateBookForm from "./CreateBookForm";
import CompleteForm from "../complete-form/CompleteForm";

import { useUnit } from "effector-react";
import React, { useCallback, useMemo, useState } from "react";
import { SwitchFavoritesStatus } from "../../../store/favorites";


const CreateBook: React.FC = () => {
  const [formData, setFormData] = useState<IDataState>(initialState);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [withoutISBN, setWithoutISBN] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [go, setGo] = useState({
    start: false,
    bookId: ''
  });
  const [done, setDone] = useState<boolean>(false);

  const user = useUnit($user);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IDataState) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleResetForm = useCallback(() => {
    setLoading(false);
    setFormData(initialState);
    setFormErrors({});
    setWithoutISBN(false);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
    }

    const result = await handleCreateBook(userId, formData);

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

  return (
    <>
      {done
        ?
        <CompleteForm action={() => setDone(false)} />
        :
        <CreateBookForm
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

export default React.memo(CreateBook);