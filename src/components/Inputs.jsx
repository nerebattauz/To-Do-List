import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import { setLocalStorage } from "../localStorage";
import { getLocalStorage } from "../localStorage";
//import List from "./List";

const Inputs = ({ FormControl, FormLabel, Input, Select }) => {

//Guardar tarea ingresada en el input en Local storage
  const [inputValue, setInputValue] = useState("")
  const changeInputValue = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
    localStorage.setItem("Tarea", inputValue)
  }

//Guardar valor seleccionado del select en Local storage
  const [selectValue, setSelectValue] = useState("")
const changeValue = (e) => {
  setSelectValue(e.target.value)
  console.log(e.target.value);
}

//Agregar tarea a la lista de tarea
const addTask = () => {
  console.log(localStorage.getItem("Tarea"));
};

//DEVOLUCIÓN HTML
return (
//Contenedor principal
  <Box display="flex" flexDir="column" gap="8" w="80%">
    <Box
      display="flex"
      gap="10"
      flexDir={{ base: "column", md: "row" }}
      justifySelf="center"
    >

{/* Input text tarea */}
      <FormControl>
    <FormLabel>Tarea</FormLabel>
    <Input
    value={inputValue}
      size="lg"
      bg="white"
      color="gray.600"
      placeholder="Ingresar una tarea"
      onChange={changeInputValue}
    />
  </FormControl>

{/* Input select estado tarea */}
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
    </Box>

{/* Botón agregar tarea */}
    <Button colorScheme="purple" gap="4" size="lg" onClick={addTask}>
      Agregar tarea
      <FaPaperPlane />
    </Button>{" "}
  </Box>
);
};

export default Inputs;
