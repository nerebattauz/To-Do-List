import { Button, Center } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const AddButton = ({ onClick }) => {
  return (
    <Button
      colorScheme="purple"
      size="lg"
      onClick={onClick}
      type="submit"
      gap={4}
      w={"full"}
    >
      Agregar tarea <FaPaperPlane />
    </Button>
  );
};

export default AddButton;
