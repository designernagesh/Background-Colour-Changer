import { Heading, Flex, Select, Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
  const [bgColor, setBgColor] = useState("");
  
  const changeHandler = e => {
    setBgColor(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    document.body.style.background = bgColor;
  }

  return (
    <>
      <Heading as="h1" align="center" my="20px">Background Colour Changer</Heading>
      <Heading align="center" fontSize={18} mb="50px">The Background Color is: { bgColor ? bgColor : "No Color Slected" }</Heading>
        <form onSubmit={ submitHandler }>
          <Flex boxShadow='lg' w='500px' rounded='md' bg='white' p="20px" m="0 auto">
              <Select onChange={ changeHandler } placeholder='Select Bg Color' mr="10px" borderWidth={2} borderColor="teal.400">
                {
                  colors.map(color => {
                    return (
                      <option value={color}>{color}</option>
                    )
                  })
                }
              </Select>
              <Button type="submit" borderTopRadius="md" colorScheme='teal' width='100%'>Change Bg Color</Button>
          </Flex>
        </form>
    </>
  );
}

export default App;
