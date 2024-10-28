import { useForm } from 'react-hook-form';
import { TCreateBookFields } from '../types';

type useValidateFormProps = {};

export const useValidateForm = ({}: useValidateFormProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<TCreateBookFields>({ mode: 'onBlur' });

	return { register, handleSubmit, reset, errors };
};
