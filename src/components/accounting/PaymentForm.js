import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Radio,
  Textarea,
  RadioGroup,
  NumberInput,
  NumberInputField
} from "@chakra-ui/react"
import React from 'react';
import Buttons from '../Buttons'

function PaymentForm() {
  
  const [value, setValue] = React.useState("cash")

  return (
    <Flex w="40%" h="100%" justify="space-between" p="16px" direction="column">
      <Heading as="h5" size="md">Nuevo Pago</Heading>

      <FormControl id="cuit" isRequired>
        <FormLabel fontSize="xs">CUIT</FormLabel>
        <Input size="sm"/>
      </FormControl>

      <FormControl id="comment" isRequired>
        <FormLabel fontSize="xs">Comentario</FormLabel>
        <Textarea placeholder="Ingresar un comentario" size="sm" resize="none"/>
      </FormControl>

      <FormControl id="paymentMethod" isRequired>
        <FormLabel fontSize="xs">Método de Pago</FormLabel>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="cash">Efectivo</Radio>
            <Radio value="transfer">Transferencia</Radio>
            <Radio value="check">Cheque</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {value === "cash" && 
      <Flex w="100%">
        <FormControl id="billNumber" isRequired>
          <FormLabel fontSize="xs">Código</FormLabel>
          <NumberInput size="sm" w="50%">
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </Flex>}

      {value === "transfer" && 
      <Flex w="100%">
        <FormControl id="cbuOrigin" isRequired>
            <FormLabel fontSize="xs">CBU Cliente</FormLabel>
            <NumberInput size="sm" mr="16px">
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl id="code" isRequired>
            <FormLabel fontSize="xs">Código</FormLabel>
            <NumberInput size="sm">
              <NumberInputField />
            </NumberInput>
          </FormControl>
      </Flex>}

      {value === "check" && 
      <Flex w="100%" wrap="wrap">
        <Flex>
          <FormControl id="number" isRequired>
            <FormLabel fontSize="xs">Número</FormLabel>
            <NumberInput size="sm" mr="16px">
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl id="date" isRequired>
            <FormLabel fontSize="xs">Fecha Pago</FormLabel>
            <Input type="date" size="sm"/>
          </FormControl>
        </Flex>
        <FormControl id="bank" isRequired>
          <FormLabel fontSize="xs" mt="8px">Banco</FormLabel>
          <Input size="sm" w="50%"/>
        </FormControl>
      </Flex>}

      <Buttons></Buttons>
    </Flex>
  );
}

export default PaymentForm;