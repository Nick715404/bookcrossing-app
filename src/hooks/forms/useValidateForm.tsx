import { $user } from '../../store/user';
import { useEffect, useState } from 'react';
import { useUnit } from 'effector-react';

type useValidateFormProps = {};

type TInitialStatusState = {
	isLoading: 'pending' | 'loading' | 'loaded';
	isError: 'pending' | 'errored' | 'successfull';
};

type useValidateFormEvents = React.ChangeEvent<
	HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const initialFormState = {
	isbn: '',
	title: '',
	state: '',
	description: '',
	author: '',
	categoryTitle: '',
	userId: '',
};

const initialErrorState = {
	message: '',
	error: '',
};

const initialStatusState: TInitialStatusState = {
	isLoading: 'pending',
	isError: 'pending',
};

export const useValidateForm = ({}: useValidateFormProps) => {
	const { userId } = useUnit($user);

	const [form, setForm] = useState<typeof initialFormState>({
		...initialFormState,
		userId: userId,
	});

	const [errors, setErrors] =
		useState<typeof initialErrorState>(initialErrorState);
	const [statuses, setStatuses] =
		useState<TInitialStatusState>(initialStatusState);

	const handleChange = (event: useValidateFormEvents) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmitForm = async (event: React.FormEvent) => {
		event.preventDefault();
		console.log(form);
	};

	return {
		form,
		setForm,
		handleChange,
		errors,
		statuses,
		handleSubmitForm,
	};
};
