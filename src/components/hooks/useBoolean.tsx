import { useEffect, useState } from "react"

const useBoolean = () => {
  const [boolean, setBoolean] = useState<boolean>(false)

  useEffect(() => {
    setBoolean(!boolean)
  }, [])

  return {
    boolean,
    setBoolean,
  }
}

export default useBoolean
