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
  NumberInputStepper,
  useColorModeValue,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import React from 'react'

const OrderForm = () => {
  const formBackgroud = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex direction="column" h="fit-content" background={formBackgroud} p={12} rounded={6} m={2}>

      <Heading nb={6}>Arma tu Pedido</Heading>

      <Flex>
        <Flex direction="column" p={8}>
        
          <FormControl id="constructionType" mt={6} isRequired>
            <FormLabel>Tipo de Construcción</FormLabel>
            <Select variant="filled">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl id="constructionType" mt={4} isRequired>
            <FormLabel>Fecha de envío</FormLabel>
            <Input type="date" variant="filled"/>
          </FormControl>

        </Flex>

        <Flex direction="column" p={8}>

          <FormControl id="quantity" mt={6} isRequired>
              <FormLabel>Cantidad</FormLabel>
              <NumberInput defaultValue={1} min={1} max={1000} variant="filled">
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper/>
                  <NumberDecrementStepper/>
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            
            <Button variant="outline" colorScheme="blue" mt={12}>Añadir</Button>

        </Flex>
      </Flex>

      <Flex direction="row-reverse">
        <Button mr={8} variant="solid" colorScheme="blue">Confirmar Pedido</Button>
        <Button mr={8} variant="ghost">Cancelar</Button>
      </Flex>
      
    </Flex>
  );
}
export default OrderForm;