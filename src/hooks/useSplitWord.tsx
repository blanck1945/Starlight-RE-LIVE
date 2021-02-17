import { useEffect, useState } from "react"

const useSplitWord = word => {
  const [splitWord, setSplitWord] = useState(undefined)

  useEffect(() => {
    setSplitWord(word.split(" "))
  }, [])

  return {
    splitWord,
  }
}

export default useSplitWord
