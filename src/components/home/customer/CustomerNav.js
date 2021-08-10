import { 
  useColorModeValue,
  Flex,
  Button,
  Heading
} from '@chakra-ui/react'
import { useHistory } from 'react-router'

const CustomerNav = ({cuit}) => {

  const navBackground = useColorModeValue("gray.100", "gray.700");

  const history = useHistory();

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

      <Heading>
        Home
      </Heading>

      <Flex alignItems="center" justifyContent="space-between" align="center">
        <Button onClick={() => history.push('/mis-pagos/' + cuit)} colorScheme="blue" variant="solid" mr={6}>Mis Pagos</Button>
        <Button onClick={() => history.push('/mi-perfil/' + cuit)} colorScheme="blue" variant="outline" mr={6}>Perfil</Button>
      </Flex>
        
    </Flex>
  )
}
export default CustomerNav;