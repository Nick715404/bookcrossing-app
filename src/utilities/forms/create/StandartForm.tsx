import { InputsList } from './InputsList';
import { Group } from '@vkontakte/vkui/dist/components/Group/Group';
import { FormLayoutGroup } from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';

export const StandartForm = () => {
	return (
		<FormLayoutGroup>
			<Group>
				<InputsList />
			</Group>
		</FormLayoutGroup>
	);
};
