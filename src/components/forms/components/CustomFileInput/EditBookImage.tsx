import styles from './Styles.module.scss';

import { ICustomImage } from "../../../../interfaces/interface";
import { activeBoxStyles, activeImageStyles, boxStyles, imageStyles } from "../../../../constants/utils";
import { Icon24CancelOutline } from "@vkontakte/icons";
import { CellButton, Div } from "@vkontakte/vkui";

type TProps = {
  images: File[];
  callback?: () => void;
  serverImage?: ICustomImage | undefined;
  isSuccess: boolean;
}

const EditBookImage = ({ images, callback, serverImage, isSuccess }: TProps) => {
  return (
    <>
      {
        images.length > 0 &&
        <Div className={styles.wrapper}>
          <Div style={isSuccess ? activeBoxStyles : boxStyles}>
            <img
              src={URL.createObjectURL(images[0])}
              alt="Selected Image"
              style={isSuccess ? activeImageStyles : imageStyles}
            />
            {
              !isSuccess &&
              <CellButton
                style={{
                  width: 'auto',
                  marginBottom: 'auto',
                  marginTop: '-15px',
                  marginRight: 'auto'
                }}
                onClick={callback}
              >
                <Icon24CancelOutline />
              </CellButton>
            }
          </Div>
        </Div>
      }
      {
        images.length === 0 &&
        <Div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <Div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={`https://буккросинг.рф:3100/${serverImage?.path}`}
              alt="Selected Image"
              style={{ ...imageStyles, margin: 0 }}
            />
          </Div>
        </Div>
      }
    </>
  )
}

export { EditBookImage };