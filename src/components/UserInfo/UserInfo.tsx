import styles from './UserInfo.module.scss';

import { $user } from "../../store/user";
import { useUnit } from "effector-react";
import { Avatar, Div, Group, Text } from "@vkontakte/vkui";

export function UserInfo() {
    const user = useUnit($user);

    return (
        <Group separator='hide' className={styles.wrapper}>
            <Div className={styles.userBlock}>
                <Div>
                    <Avatar src={user.avatar} size={80} initials='ИФ' gradientColor="blue" />
                </Div>
                <Div>
                    <Text className={styles.text} weight='2'>
                        {user ? user.name : 'Загругка...'} {user ? user.surName : 'Загрузка...'}
                    </Text>
                    <Text className="cityText" weight="3">
                        {user.city ? user.city : 'Загругка...'}
                    </Text>
                </Div>
            </Div>
        </Group>
    );
};