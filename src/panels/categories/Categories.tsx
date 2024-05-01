import CategoriesList from "../../components/CategoriesList/CategoriesList"
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router"

import { Group, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui"

type Props = {
  id: string
}

export default function Categories({ id }: Props) {
  const nav = useRouteNavigator();

  const beforeHeader = (
    <PanelHeaderBack label="Назад" onClick={() => nav.push('/')} />
  )

  return (
    <Panel id={id}>
      <PanelHeader before={beforeHeader}>
        Буккроссинг
      </PanelHeader>
      <Group>
        <CategoriesList />
      </Group>
    </Panel>
  )
}