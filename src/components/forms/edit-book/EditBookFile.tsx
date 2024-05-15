import { useParams } from "@vkontakte/vk-mini-apps-router";
import { useFetchBookImg } from "../../../hooks/useFetchBookImg";

import { CustomImage } from "../components/CustomFileInput/Image";
import { Div } from "@vkontakte/vkui";

type Props = {}

const EditBookFile = ({ }: Props) => {
  const params = useParams();
  const { data } = useFetchBookImg({ bookId: params?.id })

  console.log(data);

  return (
    <Div>
      <CustomImage serverImage={data} />
    </Div>
  );
};

export { EditBookFile };