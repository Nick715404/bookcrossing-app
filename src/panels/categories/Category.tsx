import { Panel } from "@vkontakte/vkui"
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

type Props = {
  id: string
}

export default function Category({ id }: Props) {
  return (
    <Panel id={id}>
      <h1>Category slug</h1>
    </Panel>
  )
}