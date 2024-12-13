const Item = () => {
  return (
    <div>
      <VStack spacing={4} align="stretch">
        {filteredTasks.map((t, index) => (
          <HStack
            key={index}
            p={4}
            bg="gray.100"
            borderRadius="md"
            justify="space-between"
          >
            <Text textDecoration={t.completed ? "line-through" : "none"}>
              {t.text}
            </Text>
            <HStack>
              <IconButton
                colorScheme="green"
                icon={<FaCheck />}
                onClick={() => toggleComplete(index)}
                aria-label="Marcar como completada"
              />
              <IconButton
                colorScheme="red"
                icon={<FaTrash />}
                onClick={() => deleteTask(index)}
                aria-label="Eliminar tarea"
              />
            </HStack>
          </HStack>
        ))}
      </VStack>
    </div>
  )
}

export default Item