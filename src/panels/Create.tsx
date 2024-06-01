import { Panel, PanelHeader } from '@vkontakte/vkui';
import CreateBook from '../../components/forms/create-book/CreateBook';
import { CustomHeader } from '../../components';

type Props = { id: string };

export default function Create({ id }: Props) {
  return (
    <Panel id={id}>
      <CustomHeader />
      <CreateBook />
    </Panel>
  )
}