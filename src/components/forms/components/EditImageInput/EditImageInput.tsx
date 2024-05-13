import { useParams } from "@vkontakte/vk-mini-apps-router";
import { useFetchBookImg } from "../../../../hooks/useFetchBookImg";
import { imageStyles } from "../../../../constants/utils";
import { ICustomImage } from "../../../../interfaces/interface";

import { useEffect, useState } from "react";
import { Div } from "@vkontakte/vkui";

type Props = {
  go: any;
  bookId: string;
};

const EditImageInput = ({ go, bookId }: Props) => {
  const [fetchedImage, setFetchedImages] = useState<ICustomImage | null>(null);
  const params = useParams();
  const { data } = useFetchBookImg({ bookId: params?.id });

  useEffect(() => {
    setFetchedImages(data);
  }, [data]);

  return (
    <>
      <Div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
        <Div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          {
            fetchedImage &&
            <img
              src={`https://буккросинг.рф:3100/${fetchedImage.path}`}
              alt="Selected Image"
              style={{ ...imageStyles, margin: 0 }}
            />
          }
        </Div>
      </Div>
    </>
  )
}

export { EditImageInput };