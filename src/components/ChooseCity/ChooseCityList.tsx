import { CellButton } from "@vkontakte/vkui"
import { ICity } from "../../interfaces/interface"
import { Fragment } from "react/jsx-runtime"

type Props = {
  data: ICity[],
  handleClick: (city: ICity) => void
}

export function ChooseCityList({ data, handleClick }: Props) {
  return (
    <Fragment>
      {
        data.map((city: ICity) => (
          <CellButton
            centered
            onClick={() => handleClick(city)}
            key={city.id}
          >
            {city.title}
          </CellButton>
        ))
      }
    </Fragment>
  )
}