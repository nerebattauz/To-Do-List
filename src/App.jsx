import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";

import Inputs from "./components/Inputs";
import Title from "./components/Title";
function App() {
  return (
    <Container
      display="flex"
      flexDir="column"
      bgGradient='linear(to-tl, purple.900, blue.900, teal.700)'
      py="100px"
      alignItems="center"
      gap="8"
      maxW="100vw"
      h="100vh"
      mx="auto"
      textAlign="center"
      textColor="white"
    >
      <Title Heading={Heading} />
      <Inputs
        FormControl={FormControl}
        FormLabel={FormLabel}
        Input={Input}
        Select={Select}
      />
    </Container>
  );
}

export default App;


/* Aplicale los siguientes ajustes: el fondo tiene que tener un degradado que vaya del azul oscuro al púrpura oscuro.  La tipografía  de todo el documento tiene que ser poppins. El tamaño de los inputs tiene que ser más ancho y grande. Hacerlo responsive: cuando el ancho sea sm o alcance el tamaño de un celular, los inputs tienen que estar uno debajo del otro */
