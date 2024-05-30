import styles from '../../Buttons.module.scss';

import { vkBlueColor } from '../../../../constants/utils';
import { Icon28BookmarkCheckOutline, Icon56DeleteOutline } from "@vkontakte/icons"
import { IconButton, Snackbar } from "@vkontakte/vkui"

type ContentProps = {
  handleBookMove: (e: any) => Promise<void>,
  showSnackbar: boolean,
  setShowSnackbar: (e: boolean) => void,
};

export function Content({ handleBookMove, showSnackbar, setShowSnackbar }: ContentProps) {
  return (
    <>
      <IconButton onClick={handleBookMove} className={styles.buttonTop}>
        <Icon28BookmarkCheckOutline fill={vkBlueColor} />
      </IconButton>
      {
        showSnackbar && (
          <Snackbar
            onClose={() => setShowSnackbar}
            before={<Icon56DeleteOutline width={32} height={32} />}
            duration={3000}
          >
            Книга успешно удалена из избранного!
          </Snackbar>
        )
      }
    </>
  );
};