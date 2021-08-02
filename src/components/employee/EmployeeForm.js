import {
  Flex,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue
} from "@chakra-ui/react"

function EmployeeForm() {
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    
    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <Heading nb={6}>Personal</Heading>

      <FormControl id="name" mt={6} isRequired>
        <FormLabel>Nombre</FormLabel>
        <Input variant="filled" placeholder="Nombre"></Input>
      </FormControl>

      <FormControl id="email" mt={4} isRequired>
        <FormLabel>Email</FormLabel>
        <Input variant="filled" placeholder="Email" type="email"/>
      </FormControl>

      <Flex direction="row-reverse">
        <Button mt={6} variant="solid" colorScheme="blue">Aceptar</Button>
        <Button mt={6} mr={2} variant="ghost">Cancelar</Button>
      </Flex>

    </Flex>

  );
}

export default EmployeeForm;