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
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name] : event.target.value
    });
  };

  return (
    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <Heading nb={6}>Productos</Heading>

      <Flex>
        <Flex direction="column" p={8}>
        
          <FormControl id="name" mt={6} isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input value={product.name} name="name" onChange={handleInputChange} variant="filled" placeholder="Nombre"/>
          </FormControl>

          <FormControl id="description" mt={4} isRequired>
            <FormLabel>Descripción</FormLabel>
            <Input value={product.description} name="description" onChange={handleInputChange} variant="filled" placeholder="Descripción"/>
          </FormControl>

          <FormControl id="price" mt={4} isRequired>
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

        <Flex direction="column" p={8}>

          <FormControl id="currentStock" mt={6} isRequired>
            <FormLabel>Stock actual</FormLabel>
            <NumberInput 
              value={product.currentStock}
              max={1000000} 
              variant="filled">
              <NumberInputField name="currentStock" onChange={handleInputChange}/>
            </NumberInput>
          </FormControl>

          <FormControl id="minimumStock" mt={4} isRequired>
            <FormLabel>Stock mínimo</FormLabel>
            <NumberInput 
              value={product.minimumStock}
              max={1000000} 
              variant="filled">
              <NumberInputField name="minimumStock" onChange={handleInputChange}/>
            </NumberInput>
          </FormControl>

          <FormControl id="unit" mt={4} isRequired>
            <FormLabel>Unidad de medida</FormLabel>
            <Select value={product.unitId} name="unitId" onChange={handleInputChange} variant="filled">
              <option value="1">Kilos</option>
              <option value="2">Litros</option>
              <option value="3">Metros</option>
            </Select>
          </FormControl>

        </Flex>
      </Flex>

      <Flex direction="row-reverse">
        <Button mr={8} variant="solid" colorScheme="blue" onClick={postOrPut}>Aceptar</Button>
        <Button mr={8} variant="ghost" onClick={clean}>Cancelar</Button>
      </Flex>
      
    </Flex>
  );
}

export default ProductForm;