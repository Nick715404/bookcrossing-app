import { api } from "./axiosInstance";
import { IPromiseCities } from "../../interfaces/interface";

export const fetchCities = async (): Promise<IPromiseCities> => {
  try {
    const { data } = await api.get('/cities/all');
    return data;
  }
  catch (error: any) {
    throw new Error(error);
  }
};