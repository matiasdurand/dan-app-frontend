import {
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Flex,
} from "@chakra-ui/react"
import React from 'react';

function ProductTableFilter({productFilters, setProductFilters}) {

  const handleInputChange = (event) => {
    setProductFilters({
      ...productFilters,
      [event.target.name] : event.target.value
    })
  }

  return (
    <VStack spacing={3}>

      <Text>Filtros</Text>

      <Flex>
        <FormControl id="name">
          <FormLabel fontSize="xs">Nombre</FormLabel>
          <Input name="name" onChange={handleInputChange} size="sm"/>
        </FormControl>

        <FormControl id="minimumPrice" ml="16px">
          <FormLabel fontSize="xs">Precio Mínimo</FormLabel>
          <NumberInput 
            max={100000} 
            precision="2"
            size="sm">
            <NumberInputField name="minimumPrice" onChange={handleInputChange} />
          </NumberInput>
        </FormControl>

        <FormControl id="maximumPrice" ml="16px">
          <FormLabel fontSize="xs">Precio Máximo</FormLabel>
          <NumberInput 
            max={100000}
            precision="2"
            size="sm">
            <NumberInputField name="maximumPrice" onChange={handleInputChange} />
          </NumberInput>
        </FormControl>

        <FormControl id="minimumStock" ml="16px">
          <FormLabel fontSize="xs">Stock Mínimo</FormLabel>
          <NumberInput
            max={100000}
            defaultValue="0"
            size="sm">
            <NumberInputField name="minimumStock" onChange={handleInputChange} />
          </NumberInput>
        </FormControl>

        <FormControl id="maximumStock" ml="16px">
          <FormLabel fontSize="xs">Stock Máximo</FormLabel>
          <NumberInput
            max={100000}
            defaultValue="1000"
            size="sm">
            <NumberInputField name="maximumStock" onChange={handleInputChange} />
          </NumberInput>
        </FormControl>
      </Flex>
    </VStack>
  );
}

export default ProductTableFilter;