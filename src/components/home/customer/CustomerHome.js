import { 
  Flex
} from '@chakra-ui/react'
import CustomerNav from './CustomerNav'
import ConstructionTable from '../../construction/ConstructionTable'
import DeliveryTable from '../../delivery/DeliveryTable'
import OrderTable from '../../order/OrderTable'

const CustomerHome = () => {
  return (
     
    <Flex h="100vh" direction="column">

      <CustomerNav>
      </CustomerNav>

      <Flex direction="column" p={2}>

        <ConstructionTable>
        </ConstructionTable>

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
export default CustomerHome;

