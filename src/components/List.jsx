import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import tasksArray from "../data/tasksArray";
import { FaTrash, FaCheck } from "react-icons/fa";

  const List = () => {
    const [tasks, setTasks] = useState(
      tasksArray.map((task) => ({ ...task, isChecked: false }))
    );

    const handleChecked = (taskId) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId
            ? { ...task, isChecked: !task.isChecked }
            : task
        )
      );
    };

    const deleteTask = () => {};
    return (
      <Box w="80%" mt="10">
        {tasks.map((task) => (
          <Box
            key={task.id}
            display="flex"
            flex="row"
            bg="white"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
            textDecoration={task.isChecked ? "line-through" : "none"}
            fontSize="2xl"
              color="gray.600"
              display="inline"
              mx="4"
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
                onClick={(e) => handleChecked(task.id)}
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
    );
  };

export default List;