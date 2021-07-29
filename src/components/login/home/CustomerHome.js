import { 
  Flex,
} from '@chakra-ui/react'
import ConstructionsTable from './ConstructionsTable'
import DeliveryTable from './DeliveryTable'
import Nav from './Nav'
import OrdersTable from './OrdersTable'



const CustomerHome = () => {

  return (
     
    <Flex h="100vh" direction="column">

      <Nav>
      </Nav>

      <Flex direction="column" p={2}>

        <ConstructionsTable>
        </ConstructionsTable>

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

export default CustomerHome;

