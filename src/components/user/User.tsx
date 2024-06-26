import '../../styles/components/user.scss'

import { $user } from "../../store/user";

import PropTypes from 'prop-types';
import { useUnit } from "effector-react";
import { Avatar, Div, Group, Text } from "@vkontakte/vkui";


const User = () => {

    const user = useUnit($user);

    return (
        <Group separator='hide' style={{ marginBottom: '15px' }}>
            <Div className="userBlock">
                <Div>
                    <Avatar src={user.avatar} size={80} initials='ИФ' gradientColor="blue" />
                </Div>
                <Div>
                    <Text className="nameText" weight="1">
                        {user ? user.name : 'Загругка...'} {user ? user.surName : 'Загрузка...'}
                    </Text>
                    <Text className="cityText" weight="3">
                        {user.city ? user.city : 'Загругка...'}
                    </Text>
                </Div>
            </Div>
        </Group>
    )
}

User.propTypes = {
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default User;