import { useState, useEffect } from "react"

const useWindowWidth = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => setwindowWidth(window.innerWidth))
    }

    return () => {
      window.removeEventListener("resize", () =>
        setwindowWidth(window.innerWidth)
      )
    }
  }, [window.innerWidth])

  return {
    windowWidth,
  }
}

export default useWindowWidth
