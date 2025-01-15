import { Box, Alert, AlertIcon } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Item from "./Item";
import InputText from "./InputText";
import AddButton from "./AddButton";
import InputSelect from "./InputSelect";

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
    }

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
    <Box display="flex" flexDir="column" gap="8" w={["90%", "80%", "70%"]} >
      <Box
        display="flex"
        alignItems="end"
        gap="4"
        flexDir={{ base: "column", md: "row" }}
        justifySelf="center"
      >
        {/* Input de tarea */}
        <InputText value={inputValue} onChange={changeInputValue} />

              {/* Botón agregar tarea */}
        <AddButton onClick={inputValue === ""? inputAlert : addTask} />
      </Box>
      {showAlert && (
          <Alert status="error" title="Ingrese una tarea" color={"red.700"} rounded={6}>
            <AlertIcon />
            Ingrese una tarea
          </Alert>
        )}
{/* Input select estado tarea */}
<InputSelect value={selectValue} onChange={filterTasks} />
              {/* Alerta ingresar tarea */}
              
      
      {/* Lista de tareas */}
      <Item tasks={updatedTasks} status={completedTask} trash={deleteTask} />
    </Box>
  );
};

export default Content;
