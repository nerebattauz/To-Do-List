import { Button, Center } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const AddButton = ({ onClick }) => {
  return (
    <Button
      colorScheme="purple"
      gap="4"
      size="lg"
      onClick={onClick}
      type="submit"
      width="fit-content"
      alignSelf="center"
    >
      Agregar tarea <FaPaperPlane />
    </Button>
  );
};

export default AddButton;
