import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"

function EmployeeForm() {
  return (
    <VStack w="40%" spacing={2}>

      <Heading as="h5" size="md" mb="16px">Datos del Empleado</Heading>

      <FormControl id="name" isRequired>
        <FormLabel fontSize="xs">Nombre</FormLabel>
        <Input size="sm"/>
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel fontSize="xs">Email</FormLabel>
        <Input size="sm" type="email"/>
      </FormControl>
    
    </VStack>
  );
}

export default EmployeeForm;