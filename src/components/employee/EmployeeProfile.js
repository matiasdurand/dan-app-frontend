import { 
  Flex
 } from '@chakra-ui/react'
import EmployeeForm from './EmployeeForm'


const EmployeeProfile = () => {
  return(

    <Flex h="100vh" justifyContent="center" p={8}>

      <EmployeeForm></EmployeeForm>

    </Flex>
  )
}
export default EmployeeProfile;