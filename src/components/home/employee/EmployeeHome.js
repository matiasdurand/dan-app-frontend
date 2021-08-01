import { 
  Flex
} from '@chakra-ui/react'
import DeliveryTable from '../../delivery/DeliveryTable'
import OrderTable from '../../order/OrderTable'
import CustomerTable from '../../customer/CustomerTable'
import Nav from './EmployeeNav'

const EmployeeHome = () => {
  return (
     
    <Flex h="100vh" direction="column">

      <Nav>
      </Nav>

      <Flex direction="column" p={2}>

        <CustomerTable>
        </CustomerTable>

        <Flex justify="space-between">

          <OrderTable>
          </OrderTable>

          <DeliveryTable>
          </DeliveryTable>

        </Flex>
      </Flex>
      
    </Flex>
  )
}
export default EmployeeHome;

