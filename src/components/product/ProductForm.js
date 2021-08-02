import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select
} from "@chakra-ui/react"
import React from 'react'

function ProductForm({product, setProduct}) {

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name] : event.target.value
    });
  };

  return (
    <VStack spacing={2}>

      <FormControl id="name" isRequired>
        <FormLabel fontSize="xs">Nombre</FormLabel>
        <Input value={product.name} name="name" onChange={handleInputChange} size="sm"/>
      </FormControl>

      <FormControl id="description" isRequired>
        <FormLabel fontSize="xs">Descripción</FormLabel>
        <Input value={product.description} name="description" onChange={handleInputChange} size="sm"/>
      </FormControl>

      <FormControl id="price" isRequired>
        <FormLabel fontSize="xs">Precio</FormLabel>
        <NumberInput 
          value={product.price}
          max={1000000} 
          precision="2"
          size="sm">
          <NumberInputField name="price" onChange={handleInputChange}/>
        </NumberInput>
      </FormControl>

      <FormControl id="currentStock" isRequired>
        <FormLabel fontSize="xs">Stock actual</FormLabel>
        <NumberInput 
          value={product.currentStock}
          max={1000000} 
          size="sm">
          <NumberInputField name="currentStock" onChange={handleInputChange}/>
        </NumberInput>
      </FormControl>

      <FormControl id="minimumStock" isRequired>
        <FormLabel fontSize="xs">Stock mínimo</FormLabel>
        <NumberInput 
          value={product.minimumStock}
          max={1000000} 
          size="sm">
          <NumberInputField name="minimumStock" onChange={handleInputChange}/>
        </NumberInput>
      </FormControl>

      <FormControl id="unit" isRequired>
        <FormLabel fontSize="xs">Unidad de medida</FormLabel>
        <Select value={product.unitId} name="unitId" onChange={handleInputChange} size="sm">
          <option value="1">Kilos</option>
          <option value="2">Litros</option>
          <option value="3">Metros</option>
        </Select>
      </FormControl>
    
    </VStack>
  );
}

export default ProductForm;