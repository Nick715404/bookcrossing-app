import { Panel, PanelHeader } from "@vkontakte/vkui"
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

type Props = {
  id: string
}

export default function Category({ id }: Props) {

  console.log('OKEY');

  return (
    <Panel id={id}>
      <PanelHeader separator={false}>
        Буккроссинг
      </PanelHeader>
    </Panel>
  )
}