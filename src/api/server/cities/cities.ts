import axios from 'axios';
import { IPromiseCities } from '../../../interfaces/interface';
import { api } from '../../axios/axiosInstance';

export const fetchCities = async (): Promise<IPromiseCities> => {
	try {
		const { data } = await api.get('/cities/all');
		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};
