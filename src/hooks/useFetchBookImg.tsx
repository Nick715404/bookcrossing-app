import { useQuery } from "react-query";
import { getBookImage } from "../api/server/images/image";

type Props = {
  bookId: string
}

const useFetchBookImg = ({ bookId }: Props) => {

  const getFiles = async () => {
    try {
      const images = await getBookImage(bookId);
      if (!images) {
        return null;
      }
      return images;
    } catch (error) {
      return null;
    }
  };

  return useQuery({
    queryKey: ['image', 'single', bookId],
    queryFn: getFiles,
    retry: 1,
    retryDelay: 1000,
    staleTime: 10000,
    retryOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export { useFetchBookImg };