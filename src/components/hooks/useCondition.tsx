import { useState, useEffect } from "react"

const useCondition = (
  value: string | number,
  equal: string | number,
  conditionTrue: any,
  conditionFalse: any,
  operator?: string
) => {
  // conditional value
  const [condition, setCondition] = useState<any>(undefined)

  useEffect(() => {
    // Condition is set depending of arguments
    switch (operator) {
      case "big":
        setCondition(value > equal ? conditionTrue : conditionFalse)
        break
      case "small":
        setCondition(value < equal ? conditionTrue : conditionFalse)
        break
      default:
        setCondition(value === equal ? conditionTrue : conditionFalse)
    }
  }, [value])

  return {
    condition,
  }
}

export default useCondition
