import { useEffect } from "react"

export const useTitle = ( title ) => {
  useEffect(() => {
    document.title = `${title} / Flower Shop`;
  })
  return null
}
