import { useQuery } from 'react-query';
import { getBookImage } from '../api/server/images/image';

type Props = {
	bookId: string | undefined;
};

const useFetchBookImg = ({ bookId }: Props) => {
	const getFiles = async () => {
		try {
			const images = await getBookImage(bookId);

			if (!images) null;

			return images;
		} catch (error) {
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
