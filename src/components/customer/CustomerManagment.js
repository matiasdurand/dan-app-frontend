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

    console.log("delete " + customerId);

    axios
      .delete("http://localhost:9100/customers/" + customerId)
      .then(() => {
        setCustomers(customers.slice().filter(c => c.id !== customerId));
      });

    ;
  };

  const getConstructions = (customerId) => {

    axios
      .get("http://localhost:9100/constructions?customerId=" + customerId)
      .then(response => {
        console.log(response.data);
        setConstructions(response.data);
      });
  }

  const filter = () => {

    console.log("filter " + filters.type)

    if (filters.type === "cuit") {
      axios
        .get("http://localhost:9100/customers?cuit=" + filters.value)
        .then(response => {
          console.log(response.data);
          setCustomers(response.data);
        });
    }
    else if (filters.type === "businessName") {
      axios
        .get("http://localhost:9100/customers?businessName=" + filters.value)
        .then(response => {
          console.log(response.data);
          setCustomers(response.data);
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