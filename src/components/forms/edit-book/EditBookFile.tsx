import { useParams } from "@vkontakte/vk-mini-apps-router";
import { useFetchBookImg } from "../../../hooks/useFetchBookImg";
import ImageInput from "../components/CustomFileInput/ImageInput";

type Props = {}

const EditBookFile = ({ }: Props) => {
  const params = useParams();
  const { data } = useFetchBookImg({ bookId: params?.id })

  return (
    <>
      <ImageInput />
    </>
  );
};

export { EditBookFile };