import { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { FaPaperPlane, FaCheck, FaTrash } from "react-icons/fa";
import { setLocalStorage } from "../localStorage";
import { getLocalStorage } from "../localStorage";
import Item from "./Item";
//import List from "./List";

const Inputs = ({ FormControl, FormLabel, Input, Select }) => {
  //Guardar tarea ingresada en el input en Local storage
  const [inputValue, setInputValue] = useState("");
  const [tasksArray, setTasksArray] = useState(() => {
    const savedTasks = localStorage.getItem("Tarea");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
    localStorage.setItem("Tarea", JSON.stringify([...tasksArray, inputValue]));
  };

  //Guardar valor seleccionado del select en Local storage
  const [selectValue, setSelectValue] = useState("");
  const changeValue = (e) => {
    setSelectValue(e.target.value);
  };

  //Agregar tarea a la lista de tarea
  const addTask = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Ingrese una tarea");
    } else {
      localStorage.getItem("Tarea");
      setTasksArray([...tasksArray, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (task) => {
    console.log(task.index);
  };

  useEffect(() => {}, [inputValue], [tasksArray]);
  useEffect(() => {
    localStorage.setItem("Tarea", JSON.stringify(tasksArray));
  }, [tasksArray]);

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
          <Select
            value={selectValue}
            size="lg"
            bg="white"
            color="gray.600"
            onChange={changeValue}
          >
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
      <Button
        colorScheme="purple"
        gap="4"
        size="lg"
        onClick={addTask}
        type="submit"
      >
        Agregar tarea
        <FaPaperPlane />
      </Button>

      {/* Lista */}

      <Box mt="10">
        {tasksArray.map((task, index) => (
          <Box
            key={index}
            display="flex"
            flex="row"
            bg="white"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="2xl" color="gray.600" display="inline" mx="4">
              {task}
            </Text>
            <div>
              <Button
                colorScheme="green"
                rounded="0"
                color="white"
                px="6"
                py="8"
                onClick={completedTask(task)}
              >
                <FaCheck />
              </Button>
              <Button
                colorScheme="red"
                rounded="0"
                color="white"
                px="6"
                py="8"
                onClick={deleteTask}
              >
                <FaTrash />
              </Button>
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Inputs;
