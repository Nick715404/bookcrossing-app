import { useState } from "react";
import { getBookImage } from "../../api/server/images/image";
import { useQuery } from "react-query";
import { Image } from "@vkontakte/vkui";

type TProps = {
  bookId: string;
}

const CustomImage = ({ bookId }: TProps) => {

  const getFiles = async () => {
    try {
      const images = await getBookImage(bookId);
      console.log(images);
      if (!images) {
        return null; // Если нет изображений, возвращаем null
      }
      return images;
    } catch (error) {
      return null;
    }
  };

  const { data, isError, isSuccess } = useQuery({
    queryKey: ['image', 'single', bookId],
    queryFn: getFiles,
    retry: 1,
    retryDelay: 1000,
    staleTime: 10000,
  });

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
        // src={isSuccess && data && 'http://localhost:3100/' + data.path}
        src={isSuccess && data && 'http://localhost:3100/'}
        style={{ marginBottom: '0', marginTop: '0' }}
      />
    </>
  )
}

export { CustomImage };