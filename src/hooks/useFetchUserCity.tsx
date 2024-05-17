import { useQuery } from "react-query";
import { api } from "../api/axios/axiosInstance";


type Props = {
  userVkId: number | undefined;
}

const useFetchUserCity = ({ userVkId }: Props) => {

  const fetchOwnerCity = async () => {
    try {
      const { data } = await api.get(`/user/find/${userVkId}`);
      return data;
    } catch (error) {
      throw new Error('Error with server');
    }
  }

  return useQuery({
    queryKey: ['owner', 'city', userVkId],
    queryFn: fetchOwnerCity,
    refetchOnWindowFocus: false
  });
};

export { useFetchUserCity };