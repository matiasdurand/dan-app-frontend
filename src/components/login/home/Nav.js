import { 
  useColorModeValue,
  Flex,
  Button,
  Text
} from '@chakra-ui/react'

const Nav = () => {
  const navBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex as="nav" 
      align="center" 
      alignItems="center" 
      justify="space-between" 
      wrap="wrap" 
      w="100%" 
      background={navBackground}
      mb={8} p={8}
      >

      <Text>
        Home
      </Text>

      <Flex alignItems="center" justifyContent="space-between" align="center">
        <Button colorScheme="teal" variant="solid" mr={6}>Mis Pagos</Button>
        <Button colorScheme="teal" variant="outline" mr={6}>Perfil</Button>
      </Flex>
        
    </Flex>

  )

  

}
export default Nav;