import { 
  Flex
} from '@chakra-ui/react'
import DeliveryTable from '../../customer/home/DeliveryTable'
import OrdersTable from '../../customer/home/OrdersTable'
import CustomerTable from './CustomersTable'
import Nav from './Nav'

const EmployeeHome = () => {
  return (
     
    <Flex h="100vh" direction="column">

      <Nav>
      </Nav>

      <Flex direction="column" p={2}>

        <CustomerTable>
        </CustomerTable>

        <Flex justify="space-between">

          <OrdersTable>
          </OrdersTable>

          <DeliveryTable>
          </DeliveryTable>

        </Flex>
      </Flex>
      
    </Flex>
  )
}
export default EmployeeHome;

