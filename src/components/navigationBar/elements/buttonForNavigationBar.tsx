import React from 'react';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import INavigationBarButton from '../../../intrerface/buttonNavigationBarIntrface/INavigationBarButton';

import './style/styleButtonForNavigationBar.scss';

const ButtonForNavigationBar = ({nameButton, image}:INavigationBarButton) => {

    return (
        <button className='btnNavBar'>
            {nameButton}
            <img src={image} alt="" />
        </button>
    )
}

export default ButtonForNavigationBar;