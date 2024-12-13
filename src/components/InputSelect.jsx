import { useState } from "react"

const InputSelect = ({FormControl, FormLabel, Select}) => {
const [selectValue, setSelectValue] = useState("")
const changeValue = (e) => {
    setSelectValue(e.target.value)
    console.log(e.target.value);
}

  return (
<FormControl>
          <FormLabel>Seleccionar</FormLabel>
          <Select value={selectValue} size="lg" bg="white" color="gray.600" onChange={changeValue}>
            <option color="purple.800" value="all">
              Todas las tareas
            </option>
            <option color="purple.800" value="incomplete">
              Tareas incompletas
            </option>
            <option color="purple.800" value="completed">
              Tareas completadas
            </option>
          </Select>
        </FormControl>
  )
}

export default InputSelect
