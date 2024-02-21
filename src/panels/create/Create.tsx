import { Panel } from '@vkontakte/vkui';

type Props = {
  id: string
}


export default function Create({ id }: Props) {
  return (
    <Panel id={id}>
      Create form
    </Panel>
  )
}