import { Content } from './Content';
import { useReverse } from './useReverse';

type Props = { bookId: string, };

export function ToFavButtonReverse({ bookId }: Props) {
  const { handleBookMove, setShowSnackbar, showSnackbar } = useReverse({ bookId: bookId });

  return (
    <Content
      handleBookMove={handleBookMove}
      setShowSnackbar={() => setShowSnackbar(false)}
      showSnackbar={showSnackbar}
    />
  );
}