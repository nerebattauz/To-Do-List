import { useState, useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { FaPaperPlane, FaCheck, FaTrash } from "react-icons/fa";

const Inputs = ({ FormControl, FormLabel, Input, Select }) => {

  // Estado de las tareas, lista de tareas y tareas en el local storage
  const [inputValue, setInputValue] = useState("");
  const [tasksArray, setTasksArray] = useState(() => {
    const savedTasks = localStorage.getItem("Tarea");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [selectValue, setSelectValue] = useState("");


  // Cambiar valor de input
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // Función para agregar tarea
  const addTask = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Ingrese una tarea");
    } else {
      const newTask = { text: inputValue, completed: false }; 
      const updatedTasks = [...tasksArray, newTask];
      setTasksArray(updatedTasks);
      setInputValue("");
    }
  };

  // Función para cambiar el estado de completado de una tarea
  const completedTask = (index) => {
    setTasksArray(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar tarea
  const deleteTask = (index) => {
    const updatedTasks = tasksArray.filter((_, i) => i !== index);
    setTasksArray(updatedTasks);
  };

  // Guardar tareas en LocalStorage cada vez que cambia el estado de las tareas
  useEffect(() => {
    localStorage.setItem("Tarea", JSON.stringify(tasksArray));
  }, [tasksArray]);

  return (
    <Box display="flex" flexDir="column" gap="8" w="80%">
      <Box display="flex" gap="10" flexDir={{ base: "column", md: "row" }} justifySelf="center">
        {/* Input de tarea */}
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
          <Select value={selectValue} size="lg" bg="white" color="gray.600" onChange={(e) => setSelectValue(e.target.value)}>
            <option color="purple.800" value="all">Todas las tareas</option>
            <option color="purple.800" value="incomplete">Tareas incompletas</option>
            <option color="purple.800" value="completed">Tareas completadas</option>
          </Select>
        </FormControl>
      </Box>

      {/* Botón agregar tarea */}
      <Button colorScheme="purple" gap="4" size="lg" onClick={addTask} type="submit">
        Agregar tarea <FaPaperPlane />
      </Button>

      {/* Lista de tareas */}
      <Box mt="10">
        {tasksArray.map((task, index) => (
          <Box key={index} display="flex" flex="row" bg="white" justifyContent="space-between" alignItems="center">
            <Text 
              fontSize="2xl" 
              color="gray.600"
              display="inline" 
              mx="4" 
              textDecoration={task.completed ? "line-through" : "none"}
            >
              {task.text}
            </Text>
            <div>
              <Button
                colorScheme="green"
                rounded="0"
                color="white"
                px="6"
                py="8"
                onClick={() => completedTask(index)} // Cambiar el estado completado
              >
                <FaCheck />
              </Button>
              <Button
                colorScheme="red"
                rounded="0"
                color="white"
                px="6"
                py="8"
                onClick={() => deleteTask(index)} 
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