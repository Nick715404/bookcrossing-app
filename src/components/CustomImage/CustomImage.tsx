import { Image } from "@vkontakte/vkui";
import { useFetchBookImg } from "../../hooks/useFetchBookImg";

type TProps = {
  bookId: string;
}

const CustomImage = ({ bookId }: TProps) => {

  const { data, isError, isSuccess, isLoading } = useFetchBookImg({ bookId: bookId });

  if (isLoading) {
    return (
      <Image
        size={96}
        borderRadius="m"
        className="book-img loading"
        style={{ marginBottom: '0', marginTop: '0' }}
      />
    )
  }

  if (isError || !data) {
    return (
      <Image
        size={96}
        borderRadius="m"
        className="book-img"
        style={{ marginBottom: '0', marginTop: '0' }}
      />
    );
  };

  return (
    <>
      <Image
        size={96}
        borderRadius="m"
        className="book-img"
        src={isSuccess && data && 'https://буккросинг.рф:3100/' + data.path}
        style={{ marginBottom: '0', marginTop: '0' }}
      />
    </>
  )
}

export { CustomImage };