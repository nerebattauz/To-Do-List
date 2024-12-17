import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Box,
  Button,
  Text
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaPaperPlane, FaCheck, FaTrash } from "react-icons/fa";

const Content = () => {
  // Estado de las tareas, lista de tareas y tareas en el local storage
  const [inputValue, setInputValue] = useState("");
  const [tasksArray, setTasksArray] = useState(() => {
    const localTasks = localStorage.getItem("Tarea");
    return localTasks ? JSON.parse(localTasks) : [];
  });
  const [selectValue, setSelectValue] = useState("");

  // Cambiar valor del input de manera sincrónica
  const changeInputValue = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  // Guardar tareas en LocalStorage de manera sincrónica
  useEffect(() => {
    localStorage.setItem("Tarea", JSON.stringify(tasksArray));
  }, [tasksArray]);

  // Agregar nueva tarea a la lista
  const addTask = () => {
    if (inputValue === "") {
      alert("Ingrese una tarea");
    } else {
      const newTask = { text: inputValue, completed: false };
      const updatedTasks = [...tasksArray, newTask];
      setTasksArray(updatedTasks);
      setInputValue("");
      console.log(tasksArray);
    }
  };

  // Función para cambiar el estado de completado de una tarea
  const completedTask = (index) => {
    setTasksArray((tasks) =>
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar tarea
  const deleteTask = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  return (
    <Box display="flex" flexDir="column" gap="8" w="80%">
      <Box
        display="flex"
        gap="10"
        flexDir={{ base: "column", md: "row" }}
        justifySelf="center"
      >
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
          <Select
            value={selectValue}
            size="lg"
            bg="white"
            color="gray.600"
            onChange={(e) => setSelectValue(e.target.value)}
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
        Agregar tarea <FaPaperPlane />
      </Button>

      {/* Lista de tareas */}
      <Box mt="10">
        {tasksArray.map((task, index) => (
          /* Texto de la tarea */
          <Box
            key={index}
            display="flex"
            flex="row"
            bg="white"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              fontSize="xl"
              color="gray.600"
              display="inline"
              mx="4"
              textDecoration={task.completed ? "line-through" : "none"}
            >
              {task.text}
            </Text>
            <div>
              {/* Botón marcar como completado */}
              <Button
                colorScheme="green"
                rounded="0"
                color="white"
                px="6"
                py="8"
                onClick={() => completedTask(index)}
              >
                <FaCheck />
              </Button>

              {/* Botón eliminar tarea */}
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

export default Content;
