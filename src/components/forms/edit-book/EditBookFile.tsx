import { useParams } from "@vkontakte/vk-mini-apps-router";
import { useFetchBookImg } from "../../../hooks/useFetchBookImg";
import ImageInput from "../components/CustomFileInput/ImageInput";

type Props = {}

const EditBookFile = ({ }: Props) => {

  return (
    <>
      <ImageInput />
    </>
  );
};

export { EditBookFile };