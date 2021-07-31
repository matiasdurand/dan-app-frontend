import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Button
} from "@chakra-ui/react"
import React from 'react';

function ProductTableFilter() {
  const format = (val) => `$` + val
  const parse = (val) => val.replace(/^\$/, "")

  const [minimumPrice, setMinimumPrice] = React.useState("1.00")
  const [maximumPrice, setMaximumPrice] = React.useState("1.00")

  return (
    <VStack spacing={2} w="50%">

      <Text>Filtrar productos</Text>

      <Flex alignItems="center">
        <FormControl id="name">
          <FormLabel fontSize="xs">Nombre</FormLabel>
          <Input size="sm"/>
        </FormControl>

        <FormControl id="minimumPrice" ml="16px">
          <FormLabel fontSize="xs">Precio Mínimo</FormLabel>
          <NumberInput 
            onChange={(valueString) => setMinimumPrice(parse(valueString))} 
            value={format(minimumPrice)} 
            max={100000} 
            precision="2"
            size="sm">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl id="maximumPrice" ml="16px">
          <FormLabel fontSize="xs">Precio Máximo</FormLabel>
          <NumberInput 
            onChange={(valueString) => setMaximumPrice(parse(valueString))}
            value={format(maximumPrice)}
            max={100000}
            precision="2"
            size="sm">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Flex>
      <Button size="sm" variant="link" colorScheme="blue">Filtrar</Button>
    </VStack>
  );
}

export default ProductTableFilter;