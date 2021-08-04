import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Button,
  Select,
  useColorModeValue
} from "@chakra-ui/react"
import React from 'react';

function ProductFilter({productFilters, setProductFilters, filter}) {

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleInputChange = (event) => {
    setProductFilters({
      ...productFilters,
      [event.target.name] : event.target.value
    })
  };

  return (
    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <Heading nb={6}>Filtros</Heading>

      <Flex>
        <Flex direction="column" p={8}>

          <FormControl id="type" mt={6} isRequired>
            <FormLabel>Parámetro de búsqueda</FormLabel>
            <Select name="type" onChange={handleInputChange} variant="filled">
              <option value="name">Nombre</option>
              <option value="priceRange">Rango de precio</option>
              <option value="stockRange">Rango de stock</option>
            </Select>
          </FormControl>
        
          <FormControl id="minimumPrice" mt={4}>
            <FormLabel>Precio Mínimo</FormLabel>
            <NumberInput 
              max={100000} 
              precision="2"
              variant="filled">
              <NumberInputField name="minimumPrice" onChange={handleInputChange} placeholder="Precio Mínimo"/>
            </NumberInput>
          </FormControl>

          <FormControl id="maximumPrice" mt={4}>
            <FormLabel>Precio Máximo</FormLabel>
            <NumberInput 
              max={100000}
              precision="2"
              variant="filled">
              <NumberInputField name="maximumPrice" onChange={handleInputChange} placeholder="Precio Máximo"/>
            </NumberInput>
          </FormControl>
        
        </Flex>

        <Flex direction="column" p={8}>

          <FormControl id="minimumStock" mt={6}>
            <FormLabel>Stock Mínimo</FormLabel>
            <NumberInput
              max={100000}
              defaultValue="0"
              variant="filled">
              <NumberInputField name="minimumStock" onChange={handleInputChange} />
            </NumberInput>
          </FormControl>

          <FormControl id="maximumStock" mt={4}>
            <FormLabel>Stock Máximo</FormLabel>
            <NumberInput
              max={100000}
              defaultValue="1000"
              variant="filled">
              <NumberInputField name="maximumStock" onChange={handleInputChange} />
            </NumberInput>
          </FormControl>

          <FormControl id="name" mt={4}>
            <FormLabel>Nombre</FormLabel>
            <Input name="name" onChange={handleInputChange} variant="filled" placeholder="Nombre"/>
          </FormControl>


        </Flex>

      </Flex>
      
      <Flex direction="row-reverse">
        <Button mt={6} variant="solid" colorScheme="blue" onClick={filter}>Buscar</Button>
      </Flex>

    </Flex>
  );
}

export default ProductFilter;