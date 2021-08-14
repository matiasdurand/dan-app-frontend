import { 
  useColorModeValue,
  Flex,
  Heading
} from '@chakra-ui/react'
import DrawerHome from './EmployeeDrawer'

const Nav = () => {
  const navBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex as="nav" 
    align="center" 
    alignItems="center" 
    wrap="wrap" 
    w="100%" 
    background={navBackground}
    mb={4} p={8}
    >

      <DrawerHome>
      </DrawerHome>

      <Heading ml={8}>
        Home
      </Heading>
        
    </Flex>
  )
}
export default Nav;