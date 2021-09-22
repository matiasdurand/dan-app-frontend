import { Flex } from '@chakra-ui/react'
import CustomerNav from './CustomerNav'
import ConstructionTable from '../../construction/ConstructionTable'
import DeliveryTable from '../../delivery/DeliveryTable'
import OrderTable from '../../order/OrderTable'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const CustomerHome = () => {

  const history = useHistory();

  let { cuit } = useParams();
  
  const [constructions, setConstructions] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:9100/users/api/constructions?cuit=" + cuit)
      .then((response) => { setConstructions(response.data); });

    axios
      .get("http://localhost:9100/orders/api/orders?cuit=" + cuit)
      .then((response) => { setOrders(response.data); });

    axios
      .get("http://localhost:9100/delivery/api/deliveries?cuit=" + cuit)
      .then((response) => { setDeliveries(response.data); });
    
  }, []);

  const edit = (constructionId) => {
    history.push('/construction/registro/' + cuit + '/' + constructionId);
  }

  const remove = (constructionId) => {

    axios
      .delete("http://localhost:9100/users/api/constructions/" + constructionId)
      .then(() => {
        alert("Se eliminó la construcción.");
        setConstructions(constructions.filter(c => c.id !== constructionId));
      })
      .catch((error) => {
        alert("Se produjo un error al intentar eliminar la construcción.");
        console.log(error.response.data);
      });
  }

  const generateOrder = () => {
    history.push('/pedidos/agregar/' + cuit);
  }

  return (
    <Flex h="100vh" direction="column">

      <CustomerNav cuit={cuit}></CustomerNav>

      <Flex direction="column" p={4}>

        <ConstructionTable 
          constructions={constructions} 
          edit={edit} 
          remove={remove} 
          options={true} 
          setContructionId={() => {}}>
        </ConstructionTable>

        <Flex justify="space-between" mt={8}>
          <OrderTable 
            orders={orders} 
            generateOrder={generateOrder} 
            options={false} 
            edit={() => {}} 
            setOrderId={() => {}} 
            showAdd={true}>
          </OrderTable>

          <DeliveryTable 
            deliveries={deliveries} 
            generateDelivery={() => {}} 
            showAdd={false}>
          </DeliveryTable>
        </Flex>

      </Flex>

    </Flex>
  )
}

export default CustomerHome;