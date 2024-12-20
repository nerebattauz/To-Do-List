import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const InputSelect = ({ value, onChange }) => {
  return (
    <FormControl>
      <FormLabel>Seleccionar</FormLabel>
      <Select
        value={value}
        size="lg"
        bg="white"
        color="gray.600"
        onChange={onChange}
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
  );
};

export default InputSelect;
