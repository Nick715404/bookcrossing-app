import { Panel, PanelHeader } from '@vkontakte/vkui';
import CreateBook from '../../components/forms/create-book/CreateBook';

type Props = {
  id: string
}


export default function Create({ id }: Props) {
  return (
    <Panel id={id}>
      <PanelHeader>Буккроссинг</PanelHeader>
      <CreateBook />
    </Panel>
  )
}