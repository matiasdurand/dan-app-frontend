import { Flex, 
  useColorMode, 
  useColorModeValue, 
  Input, 
  Heading, 
  FormControl, 
  FormLabel, 
  Button,
  IconButton, 
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  
  const { toggleColorMode } = useColorMode();

  const formBackground = useColorModeValue("gray.100", "gray.700");

  const history = useHistory();

  const emptyCredentials = {
    email: "",
    password: ""
  };

  const [credentials, setCredentials] = useState(emptyCredentials);

  const login = (event) => {

    event.preventDefault();

    if (credentials.email === "admin" 
        && credentials.password === "admin") {
          
          history.push("/home/employee");
    }
    else if (credentials.email === "customer" 
        && credentials.password === "customer") {
          
          history.push("/home/customer/20404060725");
    }
    else {
      alert("Credenciales inválidas.")
    }
  }

  const handleInputChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name] : event.target.value
    });
  };

  return (

    <Flex h="100vh" alignItems="center" justifyContent="center">
      
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
          
        <Heading nb={6} color="turquoise">Log in</Heading> 
          
        <FormControl id="user" isRequired="true" mt={6}>
          <FormLabel>Email</FormLabel>           
          <Input name="email" onChange={handleInputChange} variant="filled" placeholder="E-mail" type="email" />                
        </FormControl>
                
        <FormControl id="password" isRequired="true" mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input name="password" onChange={handleInputChange} variant="filled" placeholder="Contraseña" type="password" />      
        </FormControl>

        <Button onClick={login} mt={6} colorScheme="teal" variant="solid" type="submit">Ingresa</Button>
        
        <Button onClick={() => history.push("/login/registro")} mt={2} mb={6} colorScheme="teal" variant="outline" type="submit">Registrate</Button>
        
        <Flex direction="row-reverse">
          <IconButton icon={<MoonIcon/>} colorScheme="teal" variant="ghost" onClick={toggleColorMode}>Modo</IconButton>
        </Flex>
        

      </Flex> 

    </Flex>
  )
}

export default Login;