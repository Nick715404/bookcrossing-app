import { Panel, PanelHeader } from '@vkontakte/vkui';
import CreateBook from '../../components/forms/create-book/CreateBook';
import CustomHeader from '../../components/header/CustomHeader';
import EditBookF from '../../components/forms/edit-book/EditBookF';

type Props = {
  id: string
}


export default function EditPanel({ id }: Props) {
  return (
    <Panel id={id}>
      <CustomHeader />
      <EditBookF />
    </Panel>
  )
}