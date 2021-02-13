import { useEffect, useState } from "react"

const useScroll = () => {
  const [scrollPos, setScrollPos] = useState<number>(window.pageYOffset)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPos(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollPos])

  return {
    scrollPos,
  }
}

export default useScroll
