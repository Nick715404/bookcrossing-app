import { Group, Panel } from "@vkontakte/vkui"
import { AllCategoriesList, CustomHeader } from "../components"

type Props = { id: string };

export function Categories({ id }: Props) {
  return (
    <Panel id={id}>
      <CustomHeader withBack />
      <Group>
        <AllCategoriesList />
      </Group>
    </Panel>
  );
};