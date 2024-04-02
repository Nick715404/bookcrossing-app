import { Gallery } from "@vkontakte/vkui"

type Props = {
  items: any
}

export default function ImagesGallery({ items }: Props) {
  return (
    <Gallery
      style={{ marginBottom: '20px' }}
      align="center"
      slideWidth='100%'
    >
      {items.map((item: any, index: any) => (
        <div key={index} className="input-images-box">
          <img className="input-images-img" key={index} src={item} alt="" />
        </div>
      ))}
    </Gallery>
  )
}