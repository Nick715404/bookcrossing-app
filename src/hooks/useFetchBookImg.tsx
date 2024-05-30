import { useQuery, useQueryClient } from "react-query";
import { getBookImage } from "../api/server/image";
import { setSnackbar } from "../store/activeModal";

type Props = {
  bookId: string | undefined
}

const useFetchBookImg = ({ bookId }: Props) => {

  const client = useQueryClient();

  const getFiles = async () => {
    try {
      const images = await getBookImage(bookId);

      if (!images) null;

      return images;
    }
    catch (error) {
      return null;
    }
  };

  return useQuery({
    queryKey: ['image', 'single', bookId],
    queryFn: getFiles,
    retry: 2,
    retryDelay: 1000,
    retryOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

export { useFetchBookImg };