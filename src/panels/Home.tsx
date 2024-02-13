import React from 'react';

import { Panel} from '@vkontakte/vkui';

interface Props {
	id: string;
}

const Home: React.FC<Props> = ({ id }) => (
	<Panel id={id}>

	</Panel>
);

export default Home;
