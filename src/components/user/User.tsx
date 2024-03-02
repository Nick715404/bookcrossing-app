import { Avatar, Cell, Div, Group, Text } from "@vkontakte/vkui";
import PropTypes from 'prop-types';
import '../../styles/components/user.scss';


const User = ({fetchedUser}: any) => {
    return (
        <Group>
            <Div className="userBlock">
                <Div>
                    <Avatar size={80} initials='ИФ' gradientColor="blue"/>
                </Div>
                <Div>
                    <Text className="nameText" weight="1">Имя Фамлия</Text>

                    <Text className="cityText" weight="3">Город</Text>
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