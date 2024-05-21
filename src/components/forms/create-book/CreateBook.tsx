import { $user } from "../../../store/user";
import { IDataState, } from "../../../interfaces/interface";
import { initialState } from "../../../constants/utils";
import { handleFormValidation } from "../../../utilities/forms/create-book.utils";
import { useCreateBook } from "../../../hooks/useCreateBook";
import { CreateBookPipeFX } from "../../../store/books";

import CreateBookForm from "./CreateBookForm";
import CompleteForm from "../complete-form/CompleteForm";

import { useUnit } from "effector-react";
import React, { useCallback, useState } from "react";

const CreateBook: React.FC = () => {
  const [formData, setFormData] = useState<IDataState>(initialState);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [withoutISBN, setWithoutISBN] = useState<boolean>(false);
  const [go, setGo] = useState({ start: false, bookId: '' });
  const [done, setDone] = useState<boolean>(false);

  const { mutate: create, data, isLoading } = useCreateBook();
  const user = useUnit($user);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IDataState) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleResetForm = useCallback(() => {
    setFormData(initialState);
    setFormErrors({});
    setWithoutISBN(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { author } = formData;
    const userId = user.userId;
    const errors: { [key: string]: string } = {};

    // handleFormValidation(author, errors);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const DATA_FORM = { ...formData, userId: userId };

    create(DATA_FORM, {
      onSuccess: (data) => {
        setGo({ start: true, bookId: data.id });
        CreateBookPipeFX(data);
        handleResetForm();
        setDone(true);
      }
    });
  };

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

