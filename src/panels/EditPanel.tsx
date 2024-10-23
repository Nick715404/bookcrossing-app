import { Panel, PanelHeader } from '@vkontakte/vkui';
import CreateBook from '../components/forms/create-book/CreateBook';
import CustomHeader from '../components/header/CustomHeader';
import EditBookF from '../components/forms/edit-book/EditBookF';

type EditPanelProps = {
	id: string;
};

export const EditPanel = ({ id }: EditPanelProps) => {
	return (
		<Panel id={id}>
			<CustomHeader withBack />
			{/* <EditBookF /> */}
		</Panel>
	);
};
