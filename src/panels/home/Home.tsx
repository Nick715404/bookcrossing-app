import React from 'react';

import { Panel, Slider} from '@vkontakte/vkui';
import NavigationBar from '../../components/navigationBar/navigationBar';
import Header from '../../components/header/header';
//import '../../components/style/styleNavigationBar.scss';
import gener from '../../testJson/gener.json';
import IAdressJson from '../../intrerface/sliderInterface/IAdressJson';
import '../style/homeStyle.scss';

interface Props {
	id: string;
}

const Home: React.FC<Props> = ({ id }) => (
	<Panel  id={id}>
		<div className='body'>
			<div className='header'>
				<Header />
			</div>

			<div className='main'>
				<div className='genresSlider'>
					<label className='text'>жанры</label>
					<Slider 	/>
				</div>

				<div className='avtorsSlider'>
					<label className='text'>авторы</label>
					<Slider />
				</div>
				
			</div>
			
			<NavigationBar />
			
		</div>
	</Panel>
);

export default Home;
