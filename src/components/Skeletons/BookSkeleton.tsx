import LoadingBook from "../LoadingBook/LoadingBook"

const BookSkeleton = () => {
  return (
    <>
      {
        [...Array(5)].map((_, index) => (
          <LoadingBook key={index} />
        ))
      }
    </>
  )
}

export { BookSkeleton }