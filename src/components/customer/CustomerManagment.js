import {
  useEffect,
  useState
} from 'react'
import { 
  Flex 
} from '@chakra-ui/react'
import CustomerTable from './CustomerTable'
import CustomerFilter from './CustomerFilter'
import ConstructionTable from '../construction/ConstructionTable'
import axios from 'axios';

const CustomerManagment = () => {

  const defaultFilters = {
    type: "cuit",
    value: ""
  };

  const [customers, setCustomers] = useState([]);

  const [filters, setFilters] = useState(defaultFilters);

  const [constructions, setConstructions] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:9100/customers")
      .then(response => {
        console.log(response.data);
        setCustomers(response.data);
      });

  }, []);

  const remove = (customerId) => {

    axios
      .delete("http://localhost:9100/customers/" + customerId)
      .then(() => {
        alert("Cliente dado de baja.");
        window.location.href = window.location.href;
      });

    ;
  };

  const getConstructions = (customerId) => {

    console.log(customerId);
    axios
      .get("http://localhost:9100/constructions?customerId=" + customerId + "&constructionTypeId=")
      .then(response => {
        console.log(response.data);
        setConstructions(response.data);
      });
  }

  const filter = () => {

    if (filters.type === "cuit") {
      axios
        .get("http://localhost:9100/customers?cuit=" + filters.value)
        .then(response => {
          console.log(response.data);
          setCustomers([response.data]);
        })
        .catch(() => {
          alert("No hay coincidencias.")
        });
    }
    else if (filters.type === "businessName") {
      axios
        .get("http://localhost:9100/customers?businessName=" + filters.value)
        .then(response => {
          console.log(response.data);
          setCustomers([response.data]);
        })
        .catch(() => {
          alert("No hay coincidencias.")
        });
    }
  };

  return(

    <Flex h="100vh" justify="center" p={8}> 

      <Flex direction="column" align="center">

        <CustomerFilter filters={filters} setFilters={setFilters} filter={filter}></CustomerFilter>
        <CustomerTable customers={customers} deleteCustomer={remove} deleteOption={true} getConstructions={getConstructions}></CustomerTable>
        <ConstructionTable constructions={constructions} edit={() => {}} remove={() => {}} options={false} setContructionId={() => {}}></ConstructionTable>

      </Flex>

    </Flex>
  )
}
export default CustomerManagment;