import { Fragment } from "react/jsx-runtime";
import { BookSkeletonItem } from "./BookSkeletonItem";

export function BooksSkeleton() {
  return (
    <Fragment>
      {[...Array(8)].map((_, index) => (
        <BookSkeletonItem key={index} />
      ))}
    </Fragment>
  )
}