import { Container, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import BgForm from "./components/BgForm";

function App() {
  const [bgColor, setBgColor] = useState("");

  const changeHandler = e => {
    setBgColor(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    document.body.style.background = bgColor;
  }

  return (
    <Container maxW='5xl' mt='30px'>
      <Box boxShadow='lg' p='6' rounded='md' bg='white'>
        <Heading as='h1' fontSize='72px' mb='20px' color='#ec1839' align='center'>
        Background Colour Changer
        </Heading>        
        <BgForm bgColor={bgColor} changeHandler={changeHandler} submitHandler={submitHandler} />
      </Box>
    </Container>
  );
}

export default App;
