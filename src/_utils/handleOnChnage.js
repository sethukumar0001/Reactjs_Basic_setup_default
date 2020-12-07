import { setValue } from "./lodash"

export const handleOnChange = (inputValue, path, requestStructure) => {
    return setValue(requestStructure, path, inputValue.target.value)
} 