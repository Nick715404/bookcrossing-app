import { IPromiseCities } from '../../../types/interface';
import { api } from '../../axios/axiosInstance';
import { TSuccessResponse } from '../../../types';

export const fetchCities = async (): Promise<IPromiseCities> => {
	try {
		const { data: response } = await api.get<TSuccessResponse<IPromiseCities>>(
			'/cities'
		);
		return response.data;
	} catch (error: any) {
		throw new Error(error);
	}
};
