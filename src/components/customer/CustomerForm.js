import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

function CustomerForm() {
  return (
    <VStack w="40%" spacing={2}>

      <Heading as="h5" size="md" mb="16px">Datos del Cliente</Heading>

      <FormControl id="businessName" isRequired>
        <FormLabel fontSize="xs">Razón Social</FormLabel>
        <Input size="sm"/>
      </FormControl>

      <FormControl id="cuit" isRequired>
        <FormLabel fontSize="xs">CUIT</FormLabel>
        <Input size="sm"/>
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel fontSize="xs">Email</FormLabel>
        <Input size="sm" type="email"/>
      </FormControl>

      <FormControl id="maxCurrentAccount" isRequired>
        <FormLabel fontSize="xs">Máximo Monto en Descubierto</FormLabel>
        <NumberInput size="sm" defaultValue={1000} min={0} max={100000}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
          </NumberInput>
      </FormControl>
    
    </VStack>
  );
}

export default CustomerForm;