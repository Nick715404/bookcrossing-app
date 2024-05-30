import { getAllCategoriesFX } from "../../api/server/categories";
import { useEffect } from "react"

type Props = {
  children: React.ReactNode
}

export default function InitCategories({ children }: Props) {

  useEffect((): any => {
    getAllCategoriesFX();
  }, [])

  return (
    <>
      {children}
    </>
  )
}