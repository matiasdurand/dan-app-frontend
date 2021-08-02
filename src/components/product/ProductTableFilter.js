import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Button,
  useColorModeValue
} from "@chakra-ui/react"
import React from 'react';

function ProductTableFilter({productFilters, setProductFilters}) {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const handleInputChange = (event) => {
    setProductFilters({
      ...productFilters,
      [event.target.name] : event.target.value
    })
  }

  return (
    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <Heading nb={6}>Filtros</Heading>

      <Flex mt={6}>
        
        <FormControl id="name">
          <FormLabel>Nombre</FormLabel>
          <Input name="name" onChange={handleInputChange} variant="filled" placeholder="Nombre"/>
        </FormControl>

        <FormControl id="minimumPrice" ml={4}>
          <FormLabel>Precio Mínimo</FormLabel>
          <NumberInput 
            max={100000} 
            precision="2"
            variant="filled">
            <NumberInputField name="minimumPrice" onChange={handleInputChange} placeholder="Precio Mínimo"/>
          </NumberInput>
        </FormControl>

        <FormControl id="maximumPrice" ml={4}>
          <FormLabel>Precio Máximo</FormLabel>
          <NumberInput 
            max={100000}
            precision="2"
            variant="filled">
            <NumberInputField name="maximumPrice" onChange={handleInputChange} placeholder="Precio Máximo"/>
          </NumberInput>
        </FormControl>

        <FormControl id="minimumStock" ml={4}>
          <FormLabel>Stock Mínimo</FormLabel>
          <NumberInput
            max={100000}
            defaultValue="0"
            variant="filled">
            <NumberInputField name="minimumStock" onChange={handleInputChange} />
          </NumberInput>
        </FormControl>

        <FormControl id="maximumStock" ml={4}>
          <FormLabel>Stock Máximo</FormLabel>
          <NumberInput
            max={100000}
            defaultValue="1000"
            variant="filled">
            <NumberInputField name="maximumStock" onChange={handleInputChange} />
          </NumberInput>
        </FormControl>
      </Flex>
      
      <Flex direction="row-reverse">
        <Button mt={6} variant="solid" colorScheme="blue">Buscar</Button>
      </Flex>

    </Flex>
  );
}

export default ProductTableFilter;