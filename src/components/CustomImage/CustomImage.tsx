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
      if (!images) {
        return null;
      }
      return images;
    } catch (error) {
      return null;
    }
  };

  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ['image', 'single', bookId],
    queryFn: getFiles,
    retry: 1,
    retryDelay: 1000,
    staleTime: 10000,
    retryOnMount: false
  });

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