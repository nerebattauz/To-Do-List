import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputText = ({ value, onChange }) => {
  return (
    <FormControl>
      <FormLabel>Tarea</FormLabel>
      <Input
        value={value}
        size="lg"
        bg="white"
        color="gray.600"
        placeholder="Ingresar una tarea"
        autoComplete="off"
        onChange={onChange}
      />
    </FormControl>
  );
};

export default InputText;
