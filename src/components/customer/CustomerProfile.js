import {
  useEffect,
  useState
} from 'react'
import { 
  Flex
 } from '@chakra-ui/react'
import CustomerForm from './CustomerForm'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const CustomerProfile = () => {

  const history = useHistory();
  
  let { cuit } = useParams();

  const [customer, setCustomer] = useState({});

  useEffect(() => {

    axios
      .get("http://localhost:9100/users/api/customers?cuit=" + cuit)
      .then(response => { setCustomer(response.data); });

  }, []);

  const put = () => {

    let updatedCustomer = {
      id: parseInt(customer.id),
      businessName: customer.businessName,
      email: customer.email,
      maxCurrentAccount: parseFloat(customer.maxCurrentAccount)
    };

    console.log(JSON.stringify(updatedCustomer));

    axios
      .put("http://localhost:9100/users/api/customers/" + updatedCustomer.id, JSON.stringify(updatedCustomer), 
        { headers: {'Content-Type':'application/json'} })
      .then(() => {
        alert("Datos modificados correctamente.");

        setCustomer({
          id: parseInt(customer.id),
          businessName: customer.businessName,
          cuit: customer.cuit,
          email: customer.email,
          maxCurrentAccount: parseFloat(customer.maxCurrentAccount)
        });
      })
      .catch((error) => {
        alert("Error al intentar modificar los datos.");
        console.log(error.response.data);
      });
  }

  const goBack = () => { history.goBack(); }

  return(
    <Flex h="100vh" justifyContent="center" p={8}>

      <CustomerForm 
        customer={customer} 
        setCustomer={setCustomer} 
        post={put} 
        goBack={goBack}>
      </CustomerForm>

    </Flex>
  )
}

export default CustomerProfile;