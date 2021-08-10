import { 
  Flex
} from '@chakra-ui/react'
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

  useEffect(() => {

    axios
      .get("http://localhost:9100/constructions?cuit=" + cuit)
      .then(response => {
        console.log(response.data);
        setConstructions(response.data);
      });


    axios
      .get("http://localhost:9100/orders?cuit=" + cuit)
      .then(response => {
        console.log(response.data);
        setOrders(response.data);
      });
    
  }, []);

  const edit = (constructionId) => {
    history.push('/construction/registro/' + cuit + "/" + constructionId);
  }

  const remove = (constructionId) => {
    axios
      .delete("http://localhost:9100/constructions/" + constructionId)
      .then(() => {
        alert("Se eliminó la construcción");
        window.location.href = window.location.href;
      })
  }

  const generateOrder = () => {
    history.push('/pedidos/agregar/' + cuit);
  }

  return (
     
    <Flex h="100vh" direction="column">

      <CustomerNav cuit={cuit}></CustomerNav>

      <Flex direction="column" p={2}>

        <ConstructionTable constructions={constructions} edit={edit} remove={remove} options={true} setContructionId={() => {}}>
        </ConstructionTable>

        <Flex justify="space-between">

          <OrderTable orders={orders} generateOrder={generateOrder}>
          </OrderTable>

          <DeliveryTable>
          </DeliveryTable>

        </Flex>
      </Flex>
      
    </Flex>
  )
}
export default CustomerHome;

