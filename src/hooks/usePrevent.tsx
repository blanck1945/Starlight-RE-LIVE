import { useEffect, useState } from "react"

const usePrevent = func => {
  const [prevent, setPrevent] = useState(e => e.preventDefault())

  useEffect(() => {
    if (func) {
      setPrevent(func)
    }
  })

  return {
    prevent,
    setPrevent,
  }
}

export default usePrevent
