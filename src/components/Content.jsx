import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Item from "./Item";

const Content = () => {
  // Estado de las tareas, lista de tareas y tareas en el local storage
  const [inputValue, setInputValue] = useState("");
  const [tasksArray, setTasksArray] = useState(() => {
    const localTasks = localStorage.getItem("Tarea");
    return localTasks ? JSON.parse(localTasks) : [];
  });
  const [idCounter, setIdCounter] = useState(() => {
    const savedCounter = localStorage.getItem("idCounter");
    return savedCounter ? parseInt(savedCounter, 10) : 0;
  });
  const [selectValue, setSelectValue] = useState("all");
  const [updatedTasks, setUpdatedTasks] = useState(tasksArray);

  // Cambiar valor del input
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  // Agregar nueva tarea a la lista
  const addTask = () => {
    if (inputValue === "") {
      alert("Ingrese una tarea");
    } else {
      const newTask = { id: idCounter, text: inputValue, completed: false };
      setTasksArray([...tasksArray, newTask]);
      setInputValue("");

      /// Aumentar id task
      const newCounter = idCounter + 1;
      setIdCounter(newCounter);
      localStorage.setItem("idCounter", newCounter);
    }
  };

  // Guardar tareas en LocalStorage de manera inmediata
  useEffect(() => {
    localStorage.setItem("Tarea", JSON.stringify(tasksArray));
    setUpdatedTasks(tasksArray);
  }, [tasksArray, updatedTasks]);

  // Seleccionar estado tareas
  const filtrarTareas = (e) => {
    setSelectValue(e.target.value);
  };

  // Filtrar tareas de manera inmediata
  useEffect(() => {
    if (selectValue === "incomplete") {
      setUpdatedTasks(tasksArray.filter((task) => !task.completed));
    } else if (selectValue === "completed") {
      setUpdatedTasks(tasksArray.filter((task) => task.completed));
    } else if (selectValue === "all") {
      setUpdatedTasks(tasksArray);
    }
  }, [selectValue, updatedTasks]);

  // Tachar tarea
  const completedTask = (id) => {
    setTasksArray((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    setTasksArray((tasks) => tasks.filter((task) => task.id !== id));
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
            onChange={filtrarTareas}
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
      <Item tasks={updatedTasks} status={completedTask} trash={deleteTask} />
    </Box>
  );
};

export default Content;
