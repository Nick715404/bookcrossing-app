import { useState } from "react";
import { getBookImage } from "../../api/server/images/image";
import { useQuery } from "react-query";
import { Image } from "@vkontakte/vkui";

type TProps = {
  bookId: string;
}

const CustomImage = ({ bookId }: TProps) => {

  const getFiles = async () => {
    const images = await getBookImage(bookId);
    if (!images) return;
    return images;
  };

  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ['image', 'single'],
    queryFn: getFiles,
  })

  if (!data) {
    return (
      <Image
        size={96}
        borderRadius="m"
        className="book-img"
        style={{ marginBottom: '0', marginTop: '0' }}
      />
    )
  }

  return (
    <>
      <Image
        size={96}
        borderRadius="m"
        className="book-img"
        src={isSuccess && data && 'http://localhost:3100/' + data.path}
        style={{ marginBottom: '0', marginTop: '0' }}
      />
    </>
  )
}

export { CustomImage };