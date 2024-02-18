import React from 'react';
import ButtonForNavigationBar from './elements/buttonForNavigationBar';

import './style/styleNavigationBar.scss'
//import profileImg from '../../image/profileUser.svg';
//import profile from '../../image/profile.svg';

const NavigationBar = () => {
    let nameButton1 :string = "Профиль";
    let nameButton2 :string = "Каталог";
    let nameButton3 :string = "Добавить";

    return (
        <div className='navigationBar'>
            <ButtonForNavigationBar nameButton={nameButton1} /*image='../../image/profileUser.svg'*/ />
            <ButtonForNavigationBar nameButton={nameButton2} />
            <ButtonForNavigationBar nameButton={nameButton3} />
        </div>
    )
}

export default NavigationBar;