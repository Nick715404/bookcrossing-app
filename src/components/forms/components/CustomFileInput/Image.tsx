import { ICustomImage } from "../../../../interfaces/interface";
import { boxStyles, imageStyles } from "../../../../constants/utils";
import { Icon24CancelOutline } from "@vkontakte/icons";
import { CellButton, Div } from "@vkontakte/vkui";

type Props = {
  images: File[];
  callback: () => void;
  serverImage: ICustomImage | undefined;
}

const CustomImage = ({ images, callback, serverImage }: Props) => {
  
  if (serverImage) {
    return (
      <Div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
        <Div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={`https://буккросинг.рф:3100/${serverImage.path}`}
            alt="Selected Image"
            style={{...imageStyles, margin: 0}}
          />
        </Div>
      </Div>
    )
  }

  return (
    <>
      {
        images.length > 0 &&
        <Div style={{ display: "flex", flexWrap: "wrap" }}>
          <Div style={boxStyles}>
            <img
              src={URL.createObjectURL(images[0])}
              alt="Selected Image"
              style={imageStyles}
            />
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
          </Div>
        </Div>
      }
    </>
  )
}

export { CustomImage };
