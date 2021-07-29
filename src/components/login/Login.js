import { Flex, useColorMode, useColorModeValue, Center, Box, Input, Heading, FormControl, FormLabel, Button, FormHelperText, StackDivider, VStack} from '@chakra-ui/react';


const Login = () => {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return (

      <Flex h="100vh" alignItems="center" justifyContent="center">
        
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          
          <Heading nb={6} color="turquoise">Log in</Heading> 
          
          
                
          <FormControl id="user" isRequired="true" mt={6}>
            <FormLabel>Email</FormLabel>
            <Input variant="filled" placeholder="E-mail" type="email" />                
          </FormControl>
                
          <FormControl id="password" isRequired="true" mt={4}>
            <FormLabel>Contraseña</FormLabel>
            <Input variant="filled" placeholder="Contraseña" type="password" />      
          </FormControl>

          <Button mt={6} colorScheme="teal" variant="solid" type="submit">Ingresa</Button>
          <Button mt={2} mb={6} colorScheme="teal" variant="outline" type="submit">Registrate</Button>

          <Button colorScheme="teal" variant="ghost" onClick={toggleColorMode}>Modo</Button>

        </Flex> 
      </Flex>
    )
}

export default Login;