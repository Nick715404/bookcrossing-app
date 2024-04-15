import { Panel, PanelHeader } from '@vkontakte/vkui';
import CreateBook from '../../components/forms/create-book/CreateBook';
import CustomHeader from '../../components/header/CustomHeader';

type Props = {
  id: string
}


export default function Create({ id }: Props) {
  return (
    <Panel id={id}>
      <PanelHeader>
        <CustomHeader />
      </PanelHeader>
      <CreateBook />
    </Panel>
  )
}