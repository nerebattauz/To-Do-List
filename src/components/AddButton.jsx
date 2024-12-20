import { Button } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const AddButton = ({ onClick }) => {
  return (
    <Button
      colorScheme="purple"
      gap="4"
      size="lg"
      onClick={onClick}
      type="submit"
    >
      Agregar tarea <FaPaperPlane />
    </Button>
  );
};

export default AddButton;
