import { Flex } from '@chakra-ui/react'
import DeliveryTable from '../../delivery/DeliveryTable'
import OrderTable from '../../order/OrderTable'
import CustomerTable from '../../customer/CustomerTable'
import EmployeeNav from './EmployeeNav'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const EmployeeHome = () => {

  const history = useHistory();

  let { employeeId } = useParams();
  
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:9100/users/api/customers")
      .then((response) => { setCustomers(response.data); });

    axios
      .get("http://localhost:9100/orders/api/orders")
      .then((response) => { setOrders(response.data); });
    
    axios
      .get("http://localhost:9100/delivery/api/deliveries")
      .then((response) => { setDeliveries(response.data); });

  }, []);

  const generateOrder = () => { history.push('/pedidos/agregar/0'); }

  const generateDelivery = () => { history.push('/envios/agregar'); }

  const edit = (orderId) => { history.push('/pedidos/editar/' + orderId); }

  return (
    <Flex h="100vh" direction="column">

      <EmployeeNav employeeId={employeeId}></EmployeeNav>

      <Flex direction="column" p={4}>

        <CustomerTable 
          customers={customers} 
          deleteCustomer={() => {}} 
          deleteOption={false} 
          getConstructions={() => {}}>
        </CustomerTable>

        <Flex justify="space-between" mt={8}>

          <OrderTable 
            orders={orders} 
            generateOrder={generateOrder} 
            options={true} 
            edit={edit} 
            setOrderId={() => {}} 
            showAdd={true}>
          </OrderTable>

          <DeliveryTable 
            deliveries={deliveries} 
            generateDelivery={generateDelivery} 
            showAdd={true}>
          </DeliveryTable>

        </Flex>

      </Flex>
      
    </Flex>
  )
}

export default EmployeeHome;