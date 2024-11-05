import { Panel, PanelHeader } from '@vkontakte/vkui';
import CreateBook from '../components/forms/create-book/CreateBook';
import CustomHeader from '../components/header/CustomHeader';
import { StandartForm } from '../utilities/forms/create';

type CreateProps = {
	id: string;
};

export const Create = ({ id }: CreateProps) => {
	return (
		<Panel id={id}>
			<CustomHeader />
			{/* <CreateBook /> */}
			<StandartForm />
		</Panel>
	);
};
