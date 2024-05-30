import styles from './Buttons.module.scss';

import { vkBlueColor } from '../../constants/utils';
import { Icon28MessageOutline } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';

type TProps = { vkid: number | undefined, };

export function ToChatButton({ vkid }: TProps) {
  return (
    <IconButton href={`https://vk.com/im?sel=${vkid}`} className={styles.buttonBottom}>
      <Icon28MessageOutline fill={vkBlueColor} />
    </IconButton>
  );
};