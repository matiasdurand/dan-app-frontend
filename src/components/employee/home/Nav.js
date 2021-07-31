import { 
  useColorModeValue,
  Flex,
  Heading
} from '@chakra-ui/react'
import DrawerHome from './DrawerHome'

const Nav = () => {
  const navBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex as="nav" 
    align="center" 
    alignItems="center" 
    wrap="wrap" 
    w="100%" 
    background={navBackground}
    mb={8} p={8}
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