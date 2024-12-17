import { useState, useEffect } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaPaperPlane, FaCheck, FaTrash } from "react-icons/fa";

import Content from "./components/Content";
import Title from "./components/Title";
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
      h="100vh"
      mx="auto"
      textAlign="center"
      textColor="white"
    >
      <Title Heading={Heading} />
      <Content
        FormControl={FormControl}
        FormLabel={FormLabel}
        Input={Input}
        Select={Select}
        Box={Box}
        Button={Button}
        Text={Text}
        useState={useState}
        useEffect={useEffect}
        FaCheck={FaCheck}
        FaPaperPlane={FaPaperPlane}
        FaTrash={FaTrash}
      />
    </Container>
  );
}

export default App;

/* Aplicale los siguientes ajustes: el fondo tiene que tener un degradado que vaya del azul oscuro al púrpura oscuro.  La tipografía  de todo el documento tiene que ser poppins. El tamaño de los inputs tiene que ser más ancho y grande. Hacerlo responsive: cuando el ancho sea sm o alcance el tamaño de un celular, los inputs tienen que estar uno debajo del otro */
