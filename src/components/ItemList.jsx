import { Box, Button, Text } from "@chakra-ui/react";
import { FaCheck, FaTrash } from "react-icons/fa";

const ItemList = ({ tasks, status, trash }) => {
  return (
    <Box mt="10">
      {tasks.map((task) => (
        /* Texto de la tarea */
        <Box
          key={task.id}
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
              onClick={() => status(task.id)}
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
              onClick={() => trash(task.id)}
            >
              <FaTrash />
            </Button>
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default ItemList;
