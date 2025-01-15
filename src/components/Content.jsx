import {
  Box,
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Select,
  Input
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ItemList from "./ItemList";

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
  const [showAlert, setShowAlert] = useState(false);

  // Cambiar valor del input
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // Alertar que falta ingresar la tarea
  const inputAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  // Agregar nueva tarea a la lista
  const addTask = () => {
    const newTask = { id: idCounter, text: inputValue, completed: false };
    setTasksArray([...tasksArray, newTask]);
    setInputValue("");

    /// Aumentar id task
    const newCounter = idCounter + 1;
    setIdCounter(newCounter);
    localStorage.setItem("idCounter", newCounter);
  };

  // Guardar tareas en LocalStorage de manera inmediata
  useEffect(() => {
    localStorage.setItem("Tarea", JSON.stringify(tasksArray));
    setUpdatedTasks(tasksArray);
  }, [tasksArray]);

  // Seleccionar estado tareas
  const filterTasks = (e) => {
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
  }, [selectValue]);

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
    <Box display="flex" flexDir="column" gap="8" w={["90%", "80%", "70%"]}>
      <Box
        display="flex"
        alignItems="end"
        gap="4"
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
        autoComplete="off"
        onChange={changeInputValue}
      />
    </FormControl>

        {/* Botón agregar tarea */}
        <Button
          colorScheme="purple"
          size="lg"
          type="submit"
          gap={4}
          w={"full"}
          onClick={inputValue === "" ? inputAlert : addTask}
        >
          Agregar tarea <FaPaperPlane />
        </Button>

      </Box>
      {showAlert && (
        <Alert
          status="error"
          title="Ingrese una tarea"
          color={"red.700"}
          rounded={6}
        >
          <AlertIcon />
          Ingrese una tarea
        </Alert>
      )}

      {/* Input select estado tarea */}
      <FormControl>
        <FormLabel>Seleccionar</FormLabel>
        <Select
          value={selectValue}
          size="lg"
          bg="white"
          color="gray.600"
          onChange={filterTasks}
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

      {/* Alerta ingresar tarea */}

      {/* Lista de tareas */}
      <ItemList
        tasks={updatedTasks}
        status={completedTask}
        trash={deleteTask}
      />
    </Box>
  );
};

export default Content;
