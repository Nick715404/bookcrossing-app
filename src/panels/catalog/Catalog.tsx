import {
	Panel,
	PanelHeader,
	Group,
} from '@vkontakte/vkui';

import Search from '../../components/search/Search';
import Genres from '../../components/genres/Genres';
import Relevants from '../../components/relevant/Relevants';

// В комментах - это то, что на парах делали
// import { useEffect, useState } from 'react';
// import axios from 'axios';

type Props = {
	id: string
}

export default function Catalog({ id }: Props) {

	// const [author, setAuthor] = useState([]);

	// useEffect(() => {
		
	// 	const createAuthor = async () => {
	// 		const { data } = await axios
	// 			.post('http://localhost:3100/api/author/create', { name: 'Nick' })
	// 		console.log(data);
	// 	}

	// 	createAuthor();
	// }, [])

	return (
		<Panel id={id}>

			<PanelHeader>
				Буккроссинг
			</PanelHeader>

			<Search />

			<Group separator='hide'>
				<Genres />
			</Group>

			<Group separator='hide'>
				<Relevants />
			</Group>

		</Panel>
	)
}
