import User from '../components/user/User';
import SegmentedControlCustom from '../components/segmentControl/SegmentControl';
import BooksOnShelf from '../components/books-on-shelf/BooksOnShelf';
import FavoritesBooks from '../components/books-in-favorites/FavoritesBooks';

import CustomHeader from '../components/header/CustomHeader';
import { useState } from 'react';
import { Group, Panel } from '@vkontakte/vkui';

type ProfilePanelProps = {
	id: string;
};

export const ProfilePanel = ({ id }: ProfilePanelProps) => {
	const [position, setPosition] = useState<any>('shelf');

	return (
		<Panel id={id}>
			<CustomHeader />
			<User />
			<Group>
				<SegmentedControlCustom position={position} setPosition={setPosition} />
				{position === 'shelf' ? <BooksOnShelf /> : <FavoritesBooks />}
			</Group>
		</Panel>
	);
};
