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

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleInputChange = (event) => {
    setEmployee({...employee, [event.target.name] : event.target.value });
  };

  return (
    <Flex 
      direction="column" 
      h="fit-content" 
      background={formBackground} 
      p={10} 
      rounded={6}
      w="50%"
      m={2}>

      <Heading nb={6}>Personal</Heading>

      <FormControl mt={6} isRequired>
        <FormLabel>Nombre</FormLabel>
        <Input 
          value={employee.name} 
          name="name" 
          onChange={handleInputChange} 
          variant="filled"></Input>
      </FormControl>

      <FormControl mt={4} isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
          value={employee.email} 
          name="email" 
          onChange={handleInputChange} 
          variant="filled" 
          type="email"/>
      </FormControl>

      <Flex direction="row-reverse" mt={10}>
        <Button 
          mr={2} 
          variant="solid" 
          colorScheme="blue" 
          onClick={(e) => { e.preventDefault(); postOrPut(); }}>
          Aceptar
        </Button>
        <Button 
          mr={4}
          variant="ghost" 
          onClick={(e) => { e.preventDefault(); clean(); }}>
          Cancelar
        </Button>
      </Flex>

    </Flex>
  );
}

export default EmployeeForm;