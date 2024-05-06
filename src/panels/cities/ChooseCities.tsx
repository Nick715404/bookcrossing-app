import CustomHeader from "../../components/header/CustomHeader";
import { useCities } from "../../hooks/useCities";
import { Loader } from "../../utilities/cities/Loader";
import { ChooseCity } from "../../components/ChooseCity/ChooseCity";
import { Group, Panel } from "@vkontakte/vkui";


type Props = {
  id: string;
}

const ChooseCitiesPage = ({ id }: Props) => {
  const { data, isFetching, isSuccess } = useCities();

  return (
    <Panel id={id}>
      <CustomHeader />
      <Group>
        {isFetching && <Loader />}
        {isSuccess && <ChooseCity data={data.response.items} />}
      </Group>
    </Panel>
  )
}

export { ChooseCitiesPage };