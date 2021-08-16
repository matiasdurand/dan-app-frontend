import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Heading,
  useColorModeValue
} from "@chakra-ui/react"
import React from 'react'

function ProductForm({product, setProduct, postOrPut, clean}) {

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleInputChange = (event) => {
    setProduct({...product, [event.target.name] : event.target.value });
  };

  return (
    <Flex 
      direction="column" 
      h="fit-content" 
      background={formBackground} 
      p={8} 
      rounded={6} 
      m={2}>

      <Heading nb={6}>Productos</Heading>

      <Flex m={2}>

        <Flex direction="column" p={4}>
        
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input 
              value={product.name} 
              name="name" 
              onChange={handleInputChange} 
              variant="filled"/>
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Descripción</FormLabel>
            <Input 
              value={product.description} 
              name="description" 
              onChange={handleInputChange} 
              variant="filled"/>
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Precio</FormLabel>
            <NumberInput 
              value={product.price}
              max={1000000} 
              precision="2"
              variant="filled">
              <NumberInputField name="price" onChange={handleInputChange}/>
            </NumberInput>
          </FormControl>

        </Flex>

        <Flex direction="column" p={4}>

          <FormControl isRequired>
            <FormLabel>Stock actual</FormLabel>
            <NumberInput 
              value={product.currentStock}
              max={1000000} 
              variant="filled">
              <NumberInputField name="currentStock" onChange={handleInputChange}/>
            </NumberInput>
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Stock mínimo</FormLabel>
            <NumberInput 
              value={product.minimumStock}
              max={1000000} 
              variant="filled">
              <NumberInputField name="minimumStock" onChange={handleInputChange}/>
            </NumberInput>
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel>Unidad de medida</FormLabel>
            <Select 
              value={product.unitId} 
              name="unitId" 
              onChange={handleInputChange} 
              variant="filled">
              <option value="1">UN</option>
              <option value="2">M</option>
              <option value="3">CM</option>
              <option value="4">MM</option>
              <option value="5">INCH</option>
              <option value="6">KG</option>
              <option value="7">G</option>
              <option value="8">MG</option>
              <option value="9">M2</option>
              <option value="10">M3</option>
              <option value="11">CC</option>
              <option value="12">L</option>
              <option value="13">ML</option>
              <option value="14">PPM</option>
              <option value="15">PSI</option>
            </Select>
          </FormControl>

        </Flex>
        
      </Flex>

      <Flex direction="row-reverse" mt={4} mr={8}>
        <Button 
          variant="solid" 
          colorScheme="blue" 
          onClick={(e) => { e.preventDefault(); postOrPut(); }}>
          Aceptar
        </Button>
        <Button 
          mr={8} 
          variant="ghost" 
          onClick={(e) => { e.preventDefault(); clean(); }}>
          Cancelar
        </Button>
      </Flex>
      
    </Flex>
  );
}

export default ProductForm;