export const setCondition = (value, equal, conditionTrue, conditionFalse, operator = 'equal') => {
    switch(operator) {
        case 'equal':
            return value === equal ? conditionTrue : conditionFalse
        case 'big':
            return value > equal ? conditionTrue : conditionFalse
        case 'small':
            return value < equal ? conditionTrue : conditionFalse        
        default:
    }
}