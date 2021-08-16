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
    setProductFilters({...productFilters, [event.target.name] : event.target.value })
  };

  return (
    <Flex 
      direction="column" 
      h="fit-content" 
      background={formBackground} 
      p={8} 
      rounded={6} 
      m={2}>

      <Heading nb={6}>Filtros</Heading>

      <Flex m={2}>

        <Flex direction="column" p={4}>

          <FormControl isRequired>
            <FormLabel>Buscar por</FormLabel>
            <Select name="type" onChange={handleInputChange} variant="filled">
              <option value="name">Nombre</option>
              <option value="priceRange">Rango de precio</option>
              <option value="stockRange">Rango de stock</option>
            </Select>
          </FormControl>
        
          <FormControl mt={4}>
            <FormLabel>Nombre</FormLabel>
            <Input name="name" onChange={handleInputChange} variant="filled"/>
          </FormControl>

        </Flex>

        <Flex direction="column" p={4}>
          <FormControl>
              <FormLabel>Precio Mínimo</FormLabel>
              <NumberInput max={100000} precision="2" variant="filled">
                <NumberInputField name="minimumPrice" onChange={handleInputChange}/>
              </NumberInput>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Precio Máximo</FormLabel>
              <NumberInput max={100000} precision="2" variant="filled">
                <NumberInputField name="maximumPrice" onChange={handleInputChange}/>
              </NumberInput>
            </FormControl>
        </Flex>

        <Flex direction="column" p={4}>

          <FormControl>
            <FormLabel>Stock Mínimo</FormLabel>
            <NumberInput max={100000} variant="filled">
              <NumberInputField name="minimumStock" onChange={handleInputChange} />
            </NumberInput>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Stock Máximo</FormLabel>
            <NumberInput max={100000} variant="filled">
              <NumberInputField name="maximumStock" onChange={handleInputChange} />
            </NumberInput>
          </FormControl>
        </Flex>

      </Flex>
      
      <Flex direction="row-reverse" mt={2} mr={8}>
        <Button 
          variant="solid" 
          colorScheme="blue" 
          onClick={(e) => { e.preventDefault(); filter(); }}>
          Buscar
        </Button>
      </Flex>

    </Flex>
  );
}

export default ProductFilter;