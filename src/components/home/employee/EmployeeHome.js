import { 
  Flex
} from '@chakra-ui/react'
import DeliveryTable from '../../delivery/DeliveryTable'
import OrderTable from '../../order/OrderTable'
import CustomerTable from '../../customer/CustomerTable'
import Nav from './EmployeeNav'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EmployeeHome = () => {

  const [customers, setCustomers] = useState([]);

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:9100/customers")
      .then(response => {
        console.log(response.data);
        setCustomers(response.data);
      });

    axios
      .get("http://localhost:9100/orders")
      .then(response => {
        console.log(response.data);
        setOrders(response.data);
      });
    
  }, []);

  return (
     
    <Flex h="100vh" direction="column">

      <Nav>
      </Nav>

      <Flex direction="column" p={4}>

        <CustomerTable customers={customers} deleteCustomer={() => {}} deleteOption={false} getConstructions={() => {}}>
        </CustomerTable>

        <Flex justify="space-between">

          <OrderTable orders={orders}>
          </OrderTable>

          <DeliveryTable>
          </DeliveryTable>

        </Flex>
      </Flex>
      
    </Flex>
  )
}

export default EmployeeHome;