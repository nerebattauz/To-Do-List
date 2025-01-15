import { Container, Heading } from "@chakra-ui/react";
import Content from "./components/Content";

function App() {
  return (
    <Container
      display="flex"
      flexDir="column"
      bgGradient="linear(to-tl, purple.900, blue.900, teal.700)"
      py="100px"
      alignItems="center"
      gap="8"
      maxW="100vw"
      h="auto"
      minH="100vh"
      mx="auto"
      textAlign="center"
      textColor="white"
    >
          <Heading size="3xl" fontWeight="bold">
            Lista de tareas
          </Heading>
      <Content />
    </Container>
  );
}

export default App;
