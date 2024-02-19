
import { INavigationBarButton } from '../../../interfaces/interface';

const ButtonForNavigationBar = ({ nameButton, image }: INavigationBarButton) => {

    return (
        <button className='btnNavBar'>
            {nameButton}
            <img src={image} alt="" />
        </button>
    )
}

export default ButtonForNavigationBar;