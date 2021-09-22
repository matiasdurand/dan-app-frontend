import { useColorModeValue, Flex, Heading } from '@chakra-ui/react'
import DrawerHome from './EmployeeDrawer'

const EmployeeNav = ({employeeId}) => {

  const navBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex 
      as="nav" 
      align="center" 
      alignItems="center" 
      wrap="wrap" 
      w="100%" 
      background={navBackground}
      mb={4} p={8}>

      <DrawerHome employeeId={employeeId}></DrawerHome>

      <Heading ml={8}>Home</Heading>

    </Flex>
  )
}

export default EmployeeNav;