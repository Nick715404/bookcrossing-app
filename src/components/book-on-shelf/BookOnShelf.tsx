import { IBookOnShelf } from "../../interfaces/interface"

type Props = {
  book: IBookOnShelf
}

export default function BookOnShelf({ book }: Props) {
  return (
    <div>BookOnShelf</div>
  )
}