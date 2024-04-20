import { CellButton } from "@vkontakte/vkui"

const Loader = () => {
  return (
    <>
      {[...Array(21)].map((_, index) => (
        <CellButton key={index}>
          Loading...
        </CellButton>
      ))}
    </>
  )
}

export { Loader };