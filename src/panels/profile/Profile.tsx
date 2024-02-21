import { Panel } from '@vkontakte/vkui';

type Props = {
  id: string
}

export default function Profile({ id }: Props) {
  return (
    <Panel id={id}>
      Profile
    </Panel>
  )
}