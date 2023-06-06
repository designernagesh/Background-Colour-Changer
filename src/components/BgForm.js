import { Box, Heading, Select, Button } from "@chakra-ui/react";
import { useState } from "react";

const BgForm = () => {
    const [bgColor, setBgColor] = useState("");
    const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];

    const changeHandler = e => {
        setBgColor(e.target.value);
        console.log(bgColor);
      }
    
      const submitHandler = (e) => {
        e.preventDefault();
        document.body.style.background = bgColor;
      }

    return (
        <form onSubmit={ submitHandler }>
          <Box w='500px' p="20px" m="0 auto">
              <Select onChange={ changeHandler } placeholder='Select Bg Color' mr="10px" borderWidth={2} borderColor="blue.500">
                {
                  colors.map((color, i) => {
                    return (
                      <option value={color} key={i}>{color}</option>
                    )
                  })
                }
              </Select>
              <Box>
                <Heading align="center" fontSize={18} my="20px">
                    The Selected Background Color: <span style={{color: `${bgColor}`, fontSize: '32px'}}>{bgColor}</span>
                </Heading>
                <Button type="submit" borderTopRadius="md" colorScheme='blue' width='100%'>Change Bg Color</Button>
              </Box>
          </Box>
        </form>
    )
}

export default BgForm;