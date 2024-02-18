import React, { useState } from 'react';
import BurgerMenu from 'react-burger-menu';



const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    
    /*return (
        <div className='burgerMenu'>
            <button className='burgerMenuButtom' onClick={handleToggle}>
                <img src={''} alt="" />
            </button>

            <nav className={`burger-menu__nav ${isOpen ? 'burger-menu__nav--open' : ''}`}>
                <ul className='burgerMenu__list'>
                    <li className='burgerMenu__item'>
                        <a href='/' className='burgerMenu__link'>
                            Что-то то что будет 1
                        </a>
                    </li>

                    <li className='burgerMenu__item'>
                        <a href='/' className='burgerMenu__link'>
                            Что-то то что будет 2
                        </a>
                    </li>

                    <li className='burgerMenu__item'>
                        <a href='/' className='burgerMenu__link'>
                            Что-то то что будет 3
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );*/

    return (
        <BurgerMenu isOpen={false} width="300px" right>
            <BurgerMenu.CustomButton>
                
            </BurgerMenu.CustomButton>
        </BurgerMenu>
    )
};

export default BurgerMenu;