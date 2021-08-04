import {
  Flex,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue
} from "@chakra-ui/react"

function EmployeeForm({employee, setEmployee, postOrPut, clean}) {

  const handleInputChange = (event) => {
    setEmployee({
      ...employee,
      [event.target.name] : event.target.value
    });
  };

  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    
    <Flex direction="column" h="fit-content" background={formBackground} p={12} rounded={6} m={2}>

      <Heading nb={6}>Personal</Heading>

      <FormControl id="name" mt={6} isRequired>
        <FormLabel>Nombre</FormLabel>
        <Input value={employee.name} name="name" onChange={handleInputChange} variant="filled" placeholder="Nombre"></Input>
      </FormControl>

      <FormControl id="email" mt={4} isRequired>
        <FormLabel>Email</FormLabel>
        <Input value={employee.email} name="email" onChange={handleInputChange} variant="filled" placeholder="Email" type="email"/>
      </FormControl>

      <Flex direction="row-reverse">
        <Button mt={6} variant="solid" colorScheme="blue" onClick={postOrPut}>Aceptar</Button>
        <Button mt={6} mr={2} variant="ghost" onClick={clean}>Cancelar</Button>
      </Flex>

    </Flex>

  );
}

export default EmployeeForm;